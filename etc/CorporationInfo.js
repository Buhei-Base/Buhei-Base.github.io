function ConfigClass() {
};
/* 設定 取得メソッド */
ConfigClass.prototype.getConfig = function getConfig() {
  return this.customerConfig;
};

/* 設定 */
ConfigClass.prototype.customerConfig = {

     "Corporation" : {
                       "Name"           : "Company Name"
     ,                 "representative" : "Company representative"
     ,                 "PostNo"         : "post code"
     ,                 "Address"        : "Company Address"
     ,                 "TelNo"          : "tel number"
     ,                 "FaxNo"          : "fax number"
     ,                 "MarkImage"      : "./img/Saple/Markicon.png"
     }
,    "TopPage" : {
                    "TopImageURL" : "./img/SampleCorporation/TopImage.jpg"
     }
,    "ServicePage" : [
                          {
                            "caption"     : "ServicePage１ caption"
                          , "image"       : ""
                          , "explanation" : "ServicePage１ explanation"
                          }
                       ,  {
                            "caption"     : "ServicePage２ caption"
                          , "image"       : ""
                          , "explanation" : "ServicePage２ explanation"
                          }
                       ,  {
                            "caption"     : "ServicePage３ caption"
                          , "image"       : ""
                          , "explanation" : "ServicePage３ explanation"
                          }
                       ,  {
                            "caption"     : "ServicePage４ caption"
                          , "image"       : ""
                          , "explanation" : "ServicePage４ explanation"
                          }
     ]
,    "InfomationPage" : [
                          {
                            "caption"     : "受付時間"       , "explanation" : "Reception time"
                          }
                        , {
                            "caption"     : "設立"           , "explanation" : "Date of establishment"
                          }
                        , {
                            "caption"     : "事業内容"       , "explanation" : "Business content"
                          }
                        , {
                            "caption"     : "資本金"         , "explanation" : "Capital amount"
                          }
                        , {
                            "caption"     : "従業員数"       , "explanation" : "Number of Employees"
                          }
                        , {
                            "caption"     : "売上高"         , "explanation" : "amount of sales"
                          }
                        , {
                            "caption"     : "主要取引先"     , "explanation" : "Client"
                          }
                        , {
                            "caption"     : "取引銀行"       , "explanation" : "Bank"
                          }
                        , {
                            "caption"     : "許可・登録・免許"       , "explanation" : "Permission/Registration/License"
                          }
                       ,  {
                            "caption"     : "適格請求書事業者登録番号"   , "explanation" : "invoice Number"
                          }
     ]
,    'siteheme' : 'type12'     
}
