var conf;

function TopPage (){
  $("#TopImage").css("display", "block");
  $("#ServicePage").css("display", "block");
  $("#ServicePage .Service").css("display", "grid");
  $("#InfomationPage").css("display", "none");
  $("footer>*").css("visibility","unset");

  $("#ServicePage .pagetitle").removeClass('active');
  $("#ServicePage .Service > div").removeClass('onerow');

  $("#InfomationPage .pagetitle").removeClass('active');
}

function ServicePage (){
  $("#TopImage").css("display", "none");
  $("#ServicePage").css("display", "block");
  $("#ServicePage .Service").css("display", "block");
  $("#ServicePage .Service > div").addClass('onerow');

  $("#InfomationPage").css("display", "none");
  $("footer>*").css("visibility","unset");

  $("#ServicePage .pagetitle").addClass('active');
}

function InfomationPage (){
  $("#TopImage").css("display", "none");
  $("#ServicePage" ).css("display", "none");
  $("#InfomationPage").css("display", "block");
  $("footer>*").css("visibility","hidden");

  $("#InfomationPage .pagetitle").addClass('active');
}

function CorporationJSONRead( Corporation ){
    if (typeof Corporation == 'undefined') {
      Corporation='CorporationInfo';
    }
    if ( Corporation == '' ){
      Corporation='CorporationInfo';
    }
    
    var Corporation_url = './json/' + Corporation + '.json';
    $.ajax({
      url: Corporation_url,
      type: 'GET',
      dataType: "json",
    }).done(function (data) {
      // success
      //取得jsonデータ
      conf = data;
      MakePage();
    }).fail(function (data) {
      // error
      alert('Not Corporation / Sample Corporation View');
      conf = new ConfigClass().getConfig();
      MakePage();
      
    });
}
function MakePage(){
  $(".MarkImage"   ).each( function(){
   var image = new Image();
   image.src = conf.Corporation.MarkImage;
   $(this).append(image);
  } );

  $("title"   ).html( conf.Corporation.Name    ) ;
  
  var image = new Image();
  image.src = conf.TopPage.TopImageURL;
  $("#TopImage").append(image);

  $(".Name"   ).each( function(){ $(this).text( conf.Corporation.Name    ) } );
  $(".PostNo" ).each( function(){ $(this).text( conf.Corporation.PostNo  ) } );
  $(".Address").each( function(){ $(this).text( conf.Corporation.Address ) } );
  $(".TelNo"  ).each( function(){ $(this).text( conf.Corporation.TelNo   ) } );
  $(".FaxNo"  ).each( function(){ $(this).text( conf.Corporation.FaxNo   ) } );

  // 業務内容
  conf.ServicePage.forEach( function(service){
    var imageBlock = "";
    if( service.image !== undefined ){
      imageBlock = new Image;
      imageBlock.src = service.image;
    }
    $(".Service").append( "<div><div><h2 class='caption'>"+ service.caption +"</h2></div>" + "<div><p class='explanation'>" + service.explanation+ "</p></div></div>" );
  } );

  // 会社概要
  // 基本情報 (上部４段 )
  $(".Infomation").append( "<div class='gridbox'><div><span class='caption'>"+ '会社名' +"</span></div>" + "<div><span class='explanation'>" + conf.Corporation.Name + "</span></div></div>" );
  $(".Infomation").append( "<div class='gridbox'><div><span class='caption'>"+ '代表名' +"</span></div>" + "<div><span class='explanation'>" + conf.Corporation.representative + "</span></div></div>" );
  $(".Infomation").append( "<div class='gridbox'><div><span class='caption'>"+ '所在地' +"</span></div>" + "<div><span class='explanation'>" + conf.Corporation.PostNo + "<br>" + conf.Corporation.Address + "</span></div></div>" );
  $(".Infomation").append( "<div class='gridbox'><div><span class='caption'>"+ '電話番号' +"</span></div>" + "<div><span class='explanation'>" + conf.Corporation.TelNo + "</span></div></div>" );

  // その他情報報
  conf.InfomationPage.forEach( function(infomation){
    $(".Infomation").append( "<div class='gridbox'><div><span class='caption'>"+ infomation.caption +"</span></div>" + "<div><span class='explanation'>" + infomation.explanation+ "</span></div></div>" );
  } );

  // saitetheme set
  if( conf.siteheme !== 'undefined' ){
    $('html').addClass( conf.siteheme );
    $('body').addClass( conf.siteheme );
    $('header').addClass( conf.siteheme );
    $('footer').addClass( conf.siteheme );
    $('.Service>div').addClass( conf.siteheme );
    $('.Menu').addClass( conf.siteheme );
    $('.Menu-Group-Item-Link').addClass( conf.siteheme );
  }
  TopPage();
}

// 初期ローディング時 実行処理
// -------------------------------------------
window.onload = function(){
  //
  var arg  = new Object;
  url = location.search.substring(1).split('&');
 
  for(i=0; url[i]; i++) {
    var k = url[i].split('=');
    arg[k[0]] = k[1];
  }
 
  // 設定取得
  CorporationJSONRead( arg.Corporation )
}
