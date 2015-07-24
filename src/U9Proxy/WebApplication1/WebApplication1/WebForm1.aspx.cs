using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using UFSoft.UBF.Business;
using UFSoft.UBF.Util.Context;
using UFIDA.U9.ISV.MO.Proxy;
using System.Xml;
using System.IO;

namespace WebApplication1
{
    public partial class WebForm1 : System.Web.UI.Page
    {
       // enum Methods { GetScheduleObjs = "GetScheduleObjs", GetCalendarEvents = "GetCalendarEvents" };
        const string GetScheduleObj = "GetScheduleObj";//GetScheduleObj.cs
        const string GetScheduledInfo = "GetScheduledInfo";//GetScheduledInfo.cs
        const string ScheduleDataSync = "ScheduleDataSync";//ScheduleDataSync.cs
        const string GetCalendarEvents = "GetCalendarEvents";
        const string SaveCalendarEvents = "SaveCalendarEvents";
        const string PostScheduleSave = "PostScheduleSave";

        protected void Page_Load(object sender, EventArgs e)
        {
            XmlDocument xml = new XmlDocument();
            xml.Load(Server.MapPath("./ScheduleSetup.xml"));
            int dayCount = Convert.ToInt32(xml.SelectSingleNode("/Setup/DateInfo/DayCount").InnerText);
            DateTime startDate = string.IsNullOrEmpty(xml.SelectSingleNode("/Setup/DateInfo/StartDate").InnerText) ? 
                DateTime.Now.Date :
                Convert.ToDateTime( xml.SelectSingleNode("/Setup/DateInfo/StartDate").InnerText);
            string ScenarioConditions=string.Empty;
            string currentScenario=Request.QueryString["scenario"].ToString();
            if (!string.IsNullOrEmpty(currentScenario))
	        {
                //TODO 根据方案名称  查找方案条件
                ScenarioConditions = xml.SelectSingleNode("/Setup/Scenarios/Scenario[@name='" + currentScenario + "']").InnerText;
	        }
            UFIDA.U9.ISV.MO.InputDataDTOData inputDataDTOData = new UFIDA.U9.ISV.MO.InputDataDTOData(dayCount, startDate, ScenarioConditions);
            
            using (new SystemWritablePolicy())
            {
                PlatformContext.Current.OrgID           = xml.SelectSingleNode("/Setup/LoginInfo/OrgID").InnerText;
                PlatformContext.Current.UserID          = xml.SelectSingleNode("/Setup/LoginInfo/UserID").InnerText;
                PlatformContext.Current.UserCode        = xml.SelectSingleNode("/Setup/LoginInfo/UserCode").InnerText;
                PlatformContext.Current.UserName        = xml.SelectSingleNode("/Setup/LoginInfo/UserName").InnerText;
                PlatformContext.Current.UserClientIP    = xml.SelectSingleNode("/Setup/LoginInfo/UserClientIP").InnerText;
                PlatformContext.Current.EnterpriseID    = xml.SelectSingleNode("/Setup/LoginInfo/EnterpriseID").InnerText;
                PlatformContext.Current["Site"]         = xml.SelectSingleNode("/Setup/LoginInfo/Site").InnerText;
                PlatformContext.Current.Culture         = xml.SelectSingleNode("/Setup/LoginInfo/Culture").InnerText;
                PlatformContext.Current.Default_Culture = xml.SelectSingleNode("/Setup/LoginInfo/Culture").InnerText;

                //UFSoft.UBF.Util.Context.PlatformContext.Current
            }

            #region For Test Only
           
            //Response.Write("OK");            
            //ScheduleTest2Proxy sp = new ScheduleTest2Proxy();
            //sp.MyInputParam = "123sa";
            //List<UFIDA.U9.ISV.MO.TestOutputDTOData> aa = sp.Do();

            //Response.Write("<script>alert(OK" + aa + ");</script>");
            #endregion For Test Only

            string method = string.Empty;
            method = Request.QueryString["Method"].ToString();

            switch (method)
            {
                case ScheduleDataSync:
                    ScheduleDataSyncProxy sdsp = new ScheduleDataSyncProxy();
                    sdsp.InputParam = inputDataDTOData;
                    bool ScheduleDataSyncResult = sdsp.Do();
                    Response.Write(ScheduleDataSyncResult.ToString());
                    break;
                case GetScheduleObj:
                    GetScheduleObjProxy gsop = new GetScheduleObjProxy();
                    gsop.InputParam = inputDataDTOData;
                    string GetScheduleObjProxyResult = gsop.Do();
                    Response.Write(GetScheduleObjProxyResult);
                    break;
                case GetScheduledInfo:
                    GetScheduledInfoProxy gsip = new GetScheduledInfoProxy();
                    gsip.InputParam = inputDataDTOData;
                    string GetScheduledInfoResult = gsip.Do();
                    Response.Write(GetScheduledInfoResult);
                    break;
                case PostScheduleSave:
                    //handsontable data Array [{Id,Doc,ResourceID,IsSchedule,...,Day1(StartDate),Day2,Day3...}]
                    string SavePostData = this.getPostData();
                    ScheduledObjSaveProxy sosp = new ScheduledObjSaveProxy();
                    sosp.InputParam = inputDataDTOData;
                    sosp.PostScheduledObj = SavePostData;
                    string ScheduledObjSaveResult = sosp.Do();
                    Response.Write(ScheduledObjSaveResult);
                    //TODO
                    break;
                case GetCalendarEvents:
                    GetCalendarEventsProxy gcep = new GetCalendarEventsProxy();
                    gcep.InputParam = inputDataDTOData;
                    string  getCalendarEventsResult=gcep.Do();
                    Response.Write(getCalendarEventsResult);
                    break;
                case SaveCalendarEvents:
                    string PostCalendarEvents = this.getPostData();
                    SaveCalendarEventsProxy scep = new SaveCalendarEventsProxy();
                    scep.InputParam = inputDataDTOData;
                    scep.PostCalendarEvents = PostCalendarEvents;
                    string saveCalendarEventsResult = scep.Do();
                    Response.Write(saveCalendarEventsResult);
                    break;
                default:
                    Response.Write("the INVALID service name!");
                    break;
            }

        }

        /// <summary>
        /// 读取前台通过ajax会发过来的数据
        /// </summary>
        /// <returns>data</returns>
        private string getPostData()
        {
            string result = string.Empty;

            Request.InputStream.Position = 0;
            using (var inputStream=new StreamReader(Request.InputStream) )
            {
                result = inputStream.ReadToEnd();
            }
            return result;
        }
    }
}