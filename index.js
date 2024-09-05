function setFooterCurrentYear() {
  const currentYear = new Date().getFullYear();
  $("#footer-current-year").text(currentYear);
}

setFooterCurrentYear();

$('#ssr-main > div > div > div').removeClass("markdown-body");
$('[class*="Header-left"] .Button').remove();
$('[class*="Header-right"] .Button').remove();
$('[class*="Header-left-nav2"]').append($('[class*="Header-logo"] a'));

var txtSearch = $("[class*='Header-search']").eq(2);
txtSearch.text('O que você procura?');
txtSearch.prepend("<img src='https://files.readme.io/c1eadfb-lupa.png' class='ps-SearchToggle'>");

// Open the search modal and set focus on the input
txtSearch.on("click", function() {
  $('#hub-search-results').addClass('hub-search-results-active');
  $('#hub-search-results input[type="text"]').focus(); // Ensure the input gets focus when the modal opens
});

var mobileSearch = $("[class*='Header-right'] + [class*='Header-search']");

var buttonSdbx = $("<a/>"); 
var sdbxAttr = {
  class: 'LandingPage-Button LandingPage-Button--header LandingPage-Button--green',
  href: 'https://portaldev.pagbank.com.br/',
  target: '_self'
};
buttonSdbx.attr(sdbxAttr).html('Entrar no Portal do Desenvolvedor');

var buttonSdbx2 = $("<a/>"); 

var buttonCreate = $("<a/>"); 
buttonCreate.attr({
  class: 'LandingPage-Button LandingPage-Button--header LandingPage-Button--transparent',
  href: 'https://cadastro.pagseguro.uol.com.br/',
  target: '_self'
});
buttonCreate.html('Criar Conta');
var buttonCreate2 = buttonCreate.clone();

// Make sure the input inside the modal doesn't lose focus due to unexpected events
$('#hub-search-results input[type="text"]').on("focusout", function(event) {
  // If the focus goes outside the modal unintentionally, you can refocus it here
  if (!$(event.relatedTarget).closest('#hub-search-results').length) {
    $(this).focus();
  }
});

            
    function getMenuLinks() {
      var documentacao = new Array(['Começando',''],
                                   ['Processo de integração','https://dev.pagbank.uol.com.br/docs/primeiros-passos-pagbank'],
                                   ['Segurança e Selo PCI','https://dev.pagbank.uol.com.br/docs/seguranca-e-selo-pci'],
                                   ['Plataforma de API\'s',''],
                                   ['Introdução','https://dev.pagbank.uol.com.br/docs/apis-pagbank'],
                                   ['Primeiros passos','https://dev.pagbank.uol.com.br/docs/primeiros-passos'],
                                   ['Outros Serviços',''],
                                   ['Plataformas de ecommerce integradas','https://dev.pagbank.uol.com.br/docs/plataformas-introducao'],
                                   ['Mundo Físico','https://dev.pagbank.uol.com.br/docs/introducao-mundo-fisico'],
                                   ['EDI','https://dev.pagbank.uol.com.br/docs/edi']);

      var apireference = new Array(['Introdução',''],
                                   ['Funcionalidades disponíveis','https://dev.pagbank.uol.com.br/reference/introducao'],
                                   ['Integrando ao PagBank','https://dev.pagbank.uol.com.br/docs/primeiros-passos'],                                 
                                   ['Acessos, ambientes e testes','https://dev.pagbank.uol.com.br/docs/crie-sua-conta-pagbank'],
                                   ['Solicitar homologação','https://dev.pagbank.uol.com.br/docs/solicitar-homologacao'],
                                   ['Plataforma de API\'s',''],
                                   ['Pedidos e Pagamentos','https://dev.pagbank.uol.com.br/reference/objeto-order'],                                   
                                   ['Connect','https://dev.pagbank.uol.com.br/reference/criar-aplicacao'],
                                   ['Cadastro','https://dev.pagbank.uol.com.br/reference/objeto-account'],
                                   ['Pagamento Recorrente','https://dev.pagbank.uol.com.br/docs/pagamentos-recorrentes'],
                                   ['Outros Serviços',''],
                                   ['Transferência','https://dev.pagbank.uol.com.br/reference/objeto-transferencia'],
                                   ['Checkout pagbank','https://dev.pagbank.uol.com.br/reference/objeto-checkout'],
                                   ['Mundo Físico','https://dev.pagbank.uol.com.br/docs/introducao-mundo-fisico'],
                                   ['EDI','https://dev.pagbank.uol.com.br/reference/consultar-movimentos']);

      var comunidade = new Array(['',''],
                                 ['Fórum de discussão','https://dev.pagbank.uol.com.br/discuss'],
                                 ['GitHub','https://github.com/pagseguro/'],
                                 ['Novidades','https://dev.pagbank.uol.com.br/changelog']);

      var menu = new Array(['Documentação','', new Array('documentacao', documentacao)], 
                           ['API Reference', '', new Array('apireference', apireference)], 
                           ['Comunidade','', new Array('comunidade', comunidade)],
                           ['Suporte','https://app.pipefy.com/public/form/sBlh9Nq6', undefined],
                           ['Status Page','https://status.pagbank.uol.com.br/?_ga=2.13444596.2120972804.1644240079-581671694.1642512032', undefined]);

      return menu;
    }

    function hideMenuMob() {
        var overlayClass = $('div[class*=Flyout_overlay]').attr('class');
        var flyoutClasses = $('div[class*=Flyout_opened]').attr('class').split(' ');
        var flyoutDiv;

        flyoutClasses.forEach(function(classes) {
          if(classes.includes('opened') === true) flyoutDiv = classes;
        });

        $('.' + overlayClass).removeClass(overlayClass);
        $('.' + flyoutDiv).removeClass(flyoutDiv);
    }

    function showSubMenu(divName, type = 'd') { 
      hideAllMenu(divName, type); 
      if(type == 'd') {
        var elementId = '#' + divName;
        var menuId = '#menu' + divName;
        $(menuId + " a").addClass('ps-HeaderMenuActive');
        $(menuId).addClass('collapseOpen');
      } else {
        var elementId = '#mob' + divName;
        var menuId = '#menuMob' + divName;
        var linkId = '#linkMob' + divName;
        $(linkId).attr('onclick', "hideSubMenu('" + divName + "', 'm')");
        $(linkId).addClass('ps-HeaderMenuActive');
        $(linkId + ' i').addClass('arrow_collapse_open');
      }
      $(elementId).css('display', 'flex'); 
    }

    function hideSubMenu(divName, type = 'd') { 
      if(type == 'd') {
        var elementId = '#' + divName;
        var menuId = '#menu' + divName;
        $(menuId + " a").removeClass('ps-HeaderMenuActive'); 
      } else {
        var elementId = '#mob' + divName;
        var menuId = '#menuMob' + divName;
        var linkId = '#linkMob' + divName;
        $(linkId).attr('onclick', "showSubMenu('" + divName + "', 'm')");
        $(linkId).removeClass('ps-HeaderMenuActive');
        $(linkId + ' i').removeClass('arrow_collapse_open');
      }
      $(elementId).css('display', 'none'); 
      $(menuId).removeClass('collapseOpen');
    }

    function hideAllMenu(divName = '', type = 'd') {
      var menus = new Array(['documentacao'], ['apireference'], ['comunidade']);
      menus.forEach(function(menu) {
        if(menu != divName) hideSubMenu(menu);
      });
    }

    function getSubMenu(submenuContent, type) {
        var classMenu = (type == 'd') ? 'ps-subMenuNavigation' : 'ps-subMenuMobile'; 
        var activeClass = (type == 'd') ? 'ps-HeaderSubMenuActive' : 'ps-mobMenuActive';  
        var href = window.location.pathname;
        var url = '';
        var classTitle = '';
        var menu = $("<nav class='" + classMenu + "' ></nav>");
        var ulList = $('<ul></ul>');
        var li = $("<li></li>");
        var element = 'a';
        var item = '';
        var target = '_self';
        var style;

        submenuContent.forEach(function(link) {
          target = '_self';
          classTitle = '';
          if(link[1] === '') {
            element = 'h1';
            ulList = $('<ul></ul>');
            menu.append(ulList);  
            classTitle = (type == 'd') ? '' : 'ps-subMenuMobTitle'; 
          } else {
            element = 'a';
          }


          style = '';
          if(link[0].indexOf('Plataformas de e-commerce integradas') != -1) 
            style = "style='display: inline-block;'";  

          li = $("<li " + style +"></li>");
          li.addClass(classTitle);

          if(link[0].indexOf('GitHub') != -1) 
            target = "_blank";  
          
          item = $(document.createElement(element)).prop({
              innerHTML: link[0],
              href: link[1],
              target: target
          });

          if(type == 'm' && target == '_self' && element == 'a') {
            item.attr('onclick', "$('.mobModal').show(); $('.mobModal').attr('style', 'display: flex;');");
          }

          url = link[1].replace('https://dev.pagbank.uol.com.br/v1.0','');
          url = link[1].replace('https://dev.pagbank.uol.com.br','');
          if(href == url) {
              item.addClass(activeClass);
          }

          if((link[0]).includes('Mostrar todas') === true ) { 
            item.addClass('ps-subMenuLink');
          }
          item.appendTo(li);

          if(link[0] !== '')
            ulList.append(li);
        });

        menu.append(ulList);  
        return menu;
    } 
            
    function criaMenuDesktop() {
      if($('#ps-HeaderMenu').length === 0) { 
          var href = window.location.pathname;
          var activeClass = '';
          var collapse = '';
          var target = '_self';
          var url;
          var menuHeader = $("<div id='ps-HeaderMenu' class='LandingBlock' onmouseout='hideAllMenu()'></div>");
          var divSup = $('#ssr-main header')[0];
          var subMenu = '';
          var subMenuContainer = '';
          var collapseClass = '';
          var cancelLabel = '';
          var li = '';
          var subMenuList = $("<div></div>");
          var menuContainer = $("<div class='LandingMenuContainer collapse'></div>")

          var links = getMenuLinks();
          var ulList = $('<ul></ul>');
          links.forEach(function(link) {
              url = link[1].replace('https://'+window.location.hostname,'');
              if((link[0] == 'Documentação' && href.indexOf('/docs') != -1) ||  (link[0] == 'API Reference' && href.indexOf('/reference') != -1)  || (link[0] == 'Comunidade' && href.indexOf('/discuss') != -1)  ||  (link[0] == 'Comunidade' && href.indexOf('/changelog') != -1 ))
                  activeClass = "ps-HeaderMenuActive";

              if(link[0].indexOf('GitHub') != -1 || link[0].indexOf('Status') != -1) 
                  target = "_blank";  

              if(link[2] !== undefined) {
                  collapse = ' onmouseover="showSubMenu(\'' + link[2][0] + '\')" ';
                  subMenu = getSubMenu(link[2][1], 'd');
                  subMenuContainer = $("<div id='" + link[2][0] + "' style='display:none' class='ps-tooltipContainer' " + collapse + " onmouseout=\"hideSubMenu('"+ link[2][0] +"')\" ></div>").append(subMenu);
                  subMenuList.append(subMenuContainer);
                  li = $("<li id='menu"+ link[2][0] +"' " + collapse + "></li>");
              }
              else {
                li = $("<li " + collapse + " onmouseover='hideAllMenu()' ></li>");
                cancelLabel = ' cancelLabel ';
              }
            
              collapseClass = ' collapseLabel';
              var element = $(document.createElement('a')).prop({
                    innerText: link[0],
                    class: activeClass + collapseClass + cancelLabel,
                    target: target
                });

              if(link[1].length > 0) {
                  element.attr('href', link[1]);
              } else {
                  element.attr('onclick', "showSubMenu(\'' + link[2][0] + '\')");
              }

              li.append(element);
              ulList.append(li);
              activeClass = '';
              collapse = '';
              collapseClass = '';
              cancelLabel = '';
              subMenu = '';
              subMenuContainer = '';
              target = '_self';
          });

          var nav = $("<nav></nav>").append(ulList);
          menuContainer.append(nav);
          menuContainer.append(subMenuList);
          menuHeader.append(menuContainer);

          $('#LandingPage').prepend(menuHeader);
                 
          if($('[class*="rm-ReferenceMain"]').length != 0 || $('[class*="Discuss"]').length != 0 || $('[class*="rm-Changelog"]').length != 0) { 
              $('header[class*="rm-Header"]:nth-child(1)').append(menuHeader);
              $('[class*="Header-top"]').css('border-bottom', '1px solid rgb(229, 229, 229)');
          } else if($('#LandingPage').length != 0) {
               //$('.rm-Header-top + div').append(menuHeader);
            	$('header[class*="rm-Header"]:nth-child(1)').append(menuHeader);
              $('[class*="Header-top"]').css('border-bottom', '1px solid rgb(229, 229, 229)');
          } else if($('[class*="LandingMenuContainer"]').length === 0) { 
              if($('[class*="rm-Guides"]').length != 0 || $('[class*="page404_content"]').length != 0) {
                $(divSup).append(menuHeader);
              } else {
                $(divSup).prepend(menuHeader);
              }
          }else if ($('header.rm-Header').length != 0){
            console.log('criando menu opção 4');
            $('header.rm-Header:nth-child(1)').append(menuHeader);
            $('[class*="Header-top"]').css('border-bottom', '1px solid rgb(229, 229, 229)');
        }
      }
    }  

    function criaMenuMobile() {
       if($('#ps-MobileMenu').length === 0) {
            $('[class*="MobileFlyout"] a i').remove();
            var menuClass = ($('[class*="MobileFlyout"] a:nth-child(1)').attr('class'));
            if(menuClass !== undefined && menuClass.includes("active"))
              menuClass = menuClass.replace('active','');
            $('[class*="MobileFlyout"] a:not([class*="logo"])').remove();
            $('[class*="NavItem-item_inactive"]').remove();
            $('[class*="MobileFlyout-divider"]').remove();

            var href = window.location.pathname;
            var activeClass = '';
            var target = '_self';
            var url;
            var subMenu = '';
            var subMenuContainer = '';
            var collapse = '';
            var collapseClass = '';
            var li = '';
            var menuitem = '';
            var subMenuList = '';
          
            var links = getMenuLinks();
            var menuHeader = $('<div class="ps-mobHeader"><span style="position: absolute;left: 16px;" onclick="hideMenuMob()"><img id="closeMenu" src="https://files.readme.io/8b282cb-closeMenu.png" width="16px" height="16px"></span><a href="https://dev.pagseguro.uol.com.br/"><img style="margin: auto 0px auto 0px; background-color: hsl(0, 0%, 90%); max-width: 88px; transition: background-color 300ms;" src="https://assets.pagseguro.com.br/ps-bootstrap/v7.3.1/svg/pagbank/logo-pagbank.svg"><img id="logoDevsMob" style="padding: 8px 0px 10px 10px; max-width: 86px;" src="https://files.readme.io/07c908e-logo_developer.png"></a></div>');
            var menuContainer = $('<div id="ps-MobileMenu" />').append(menuHeader);
            var ulList = $('<ul></ul>');
            links.forEach(function(link, key) {
               url = link[1].replace('https://'+window.location.hostname,'')
              if((link[0] == 'Documentação' && href.indexOf('/docs') != -1) ||  (link[0] == 'API Reference' && href.indexOf('/reference') != -1)  || (link[0] == 'Comunidade' && href.indexOf('/discuss') != -1)  ||  (link[0] == 'Comunidade' && href.indexOf('/changelog') != -1 ))
                  activeClass = "ps-mobMenuActive";

              if(link[0].indexOf('GitHub') != -1 || link[0].indexOf('Status') != -1) 
                  target = "_blank";  

              menuitem = $("<a></a>");
              subMenuList = $("<div></div>");


              if(link[2] !== undefined) {
                  subMenu = getSubMenu(link[2][1], 'm');
                  subMenuContainer = $("<div id='mob" + link[2][0] + "' style='display: none'></div>").append(subMenu);
                  subMenuList.append(subMenuContainer);

                  menuitem.addClass(activeClass);
                  menuitem.addClass('collapseLabel');
                  menuitem.attr('onclick', "showSubMenu('" + link[2][0] + "', 'm')");
                  menuitem.attr('id', "linkMob" + link[2][0]);
                  menuitem.append($('<div style="display:flex; justify-content: space-between; height:48px;">' + link[0] + '<i class="arrow_collapse"></i></div>'));
                  idmenu = "id ='menuMob" + link[2][0] + "'";
              }
              else {
                  menuitem.attr('href', link[1]);
                  menuitem.attr('target', target);
                  menuitem.append($('<div style="height:48px;">' + link[0] + '</div>'));
                  if(target != "_blank") {
                    menuitem.attr('onclick', "$('.mobModal').show();$('.mobModal').attr('style', 'display: flex;')");
                  }
                  idmenu = '';
              }

              li = $("<li "+ idmenu +"></li>").append(menuitem);
              li.addClass('mobTitle');
              
              ulList.append(li).append(subMenuList);
              menudiv = '';
              activeClass = '';
              collapseClass = '';
              target = '_self';
            });
          
            var nav = $("<nav></nav>").append(ulList);
            menuContainer.append(nav);

            buttonSdbx2.attr(sdbxAttr).html('Entrar no Sandbox').attr('id','buttonSdbxMobile');
            buttonSdbx2.attr('style', 'height:50px');
            buttonCreate2.html('Criar Conta');
            buttonCreate2.attr('id', 'buttonCreateMobile');
            buttonCreate2.attr('style', 'height:50px');

           btnList = $("<div class='ps-MobileMenuButton'></div>").append(buttonSdbx2).append(buttonCreate2).append($("<div class='ps-MobileMenuiOS'></div>"));


           $('[class*="MobileFlyout"]:not([class*="logo"])').prepend(menuContainer).append("<div class='mobModal'><img src='https://files.readme.io/5dbce17-loading.gif' class='mobModalImg' /></div>").after(btnList);
           $('[class*="MobileFlyout-divider"]').remove();
        }
   }
             
   function atualizaLogo() {  
        var imgLogo = '<img style="margin: auto 0px auto 0px; transition: background-color 300ms;" src="https://assets.pagseguro.com.br/ps-bootstrap/v7.3.1/svg/pagbank/logo-pagbank.svg">';
        var imgDevs = '<img id="logoDevs" style="padding: 10px 0px 10px 10px;" src="https://files.readme.io/07c908e-logo_developer.png">';
        $('.rm-Logo img').remove();
        $('.rm-Logo').append(imgLogo).append(imgDevs);

        if($('[class*="Header-logo"]').attr('class') != undefined) {
          var classes = ($('[class*="Header-logo"]').attr('class')).split(" ");
          classes.forEach(function(classe, key) {
              if(classe.startsWith('Header-logo')) {
                  $('[class*="Header-logo"]').removeClass(classe);
              }
          });
        }
        
    }

    function atualizaLogoMob() {
        var imgLogoMob = '<img style="margin: auto 0px auto 0px; max-width: 100px; transition: background-color 300ms;" src="https://assets.pagseguro.com.br/ps-bootstrap/v7.3.1/svg/pagbank/logo-pagbank.svg">';
        var imgDevsMob = '<img id="logoDevsMob" style="padding: 8px 0px 10px 10px; max-width: 100px;" src="https://files.readme.io/07c908e-logo_developer.png">';
        $('#LandingHeaderMobile').remove();
        $('[class*="Header-left_mobile"]').append("<div id='LandingHeaderMobile' class='LandingHeaderMobile'><a id='LandingHeaderMobileLink' href='https://dev.pagseguro.uol.com.br/'></a></div>");
        $('[class*=Header-left-nav]').remove();
        $('#LandingHeaderMobileLink').append(imgLogoMob).append(imgDevsMob); 
        //menu mobile logo
        $('[class*=MobileFlyout-logo] img').remove();
    }
        
    function atualizaHeader() { 
        /*$('.Dropdown_closed').hide(); */
      	$('header .Dropdown_closed').hide();/*
        var txtSearch = $("[class*='Header-search']");
        txtSearch = $(txtSearch).eq(2);
        $(txtSearch).text('O que você procura?');
        $(txtSearch).prepend("<img src='https://files.readme.io/c1eadfb-lupa.png' class='ps-SearchToggle'>"); */
        var searchDiv = "<div id='ps-headerSearch'></div>"; 

        if($('[class*=Header-right] .LandingPage-Button--green').length === 0) {
            $('[class*=Header-right]').append(searchDiv).append(buttonSdbx).append(buttonCreate);
            $('#ps-headerSearch').prepend(txtSearch);
        }
    }

    function waitForEl(selector, callback) {
      if ($(selector).length) {
        callback();
      } else {
        setTimeout(function() {
          waitForEl(selector, callback);
        }, 100);
      }
    };

    var divMenu = $('#ssr-main header')[0];
    var intervalHeader;
    var intervalMenu;
    var intervalDeskMenu;
    var intervalMobLogo;

    waitForEl(divMenu, function() {  
      intervalHeader = setInterval(function() {
        if($('#ps-headerSearch').length === 0) {
          atualizaHeader();
        }
      }, 300);  

      intervalDeskMenu = setInterval(function() {
        if($('.LandingMenuContainer > nav').length === 0) {
          $('#ps-HeaderMenu').remove();
          criaMenuDesktop();
        }
      }, 300); 

      intervalMobLogo = setInterval(function() {
        if($('#logoDevsMob').length === 0) {
          atualizaLogoMob();
        }
      }, 300); 

      intervalMenu = setInterval(function() {
        if($('#ps-MobileMenu').length === 0) {
          $('[class*=MobileFlyout]').empty();
          criaMenuMobile();
        }
      }, 300);         
    });
       
    $(window).on('load', function() { 
        var lateLoad;
        var countLoad = 0;
        atualizaLogo();

        if($('#ps-headerSearch').length !== 0) {
          clearInterval(intervalHeader);
        } 

        if($('.LandingMenuContainer > nav').length !== 0) {
          clearInterval(intervalDeskMenu);
        } 

        if($('#ps-MobileMenu').length !== 0) {
          clearInterval(intervalMenu);
        } 

        if($('#logoDevsMob').length !== 0) {
          clearInterval(intervalMobLogo);
        } 

        lateLoad = setInterval(function() {
            if($('#ps-headerSearch').length === 0) {
              atualizaHeader();
            }

            if($('.LandingMenuContainer > nav').length === 0) {
              $('#ps-HeaderMenu').remove();
              criaMenuDesktop();
            }

            if($('#logoDevsMob').length === 0) {
              atualizaLogoMob();
            }

            if($('#ps-MobileMenu').length === 0) {
              $('[class*=MobileFlyout]').empty();
              criaMenuMobile();
            }
            countLoad++;
        }, 1000); 
        
        if(countLoad > 10) {
          clearInterval(lateLoad);
        }
   });

async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
    } catch (error) {
        console.error(error.message);
    }
}

function setUpEncryptCardTooltips() {
  const $encryptCardTooltip = $('.encryptCardTooltip');

    $(".encryptButton").on("click", function () {
        $encryptCardTooltip.removeClass("on");
        $(this).siblings($encryptCardTooltip).addClass("on");
    });

    $(document).on("click", function (e) {
        if (!$(e.target).closest(".withEncryptCardTooltip").length) {
            $encryptCardTooltip.removeClass("on");
        }
    });
}

$(window).on('pageLoad', function () {
    const currentUrl = window.location.href;

    const regexTestCards = /cartoes-de-teste/;

    if(regexTestCards.test(currentUrl)) {
      setUpEncryptCardTooltips();
    }
});

function setEncryptCardTooltipMessage(elementId, message) {
    const elementIdSelector = "#" + elementId;
    $(elementIdSelector).text(message);
};

function copyEncryptedCard(cardNumber, securityCode) {
    let card = {};

    try {
        card = PagSeguro.encryptCard({
            publicKey: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAr+ZqgD892U9/HXsa7XqBZUayPquAfh9xx4iwUbTSUAvTlmiXFQNTp0Bvt/5vK2FhMj39qSv1zi2OuBjvW38q1E374nzx6NNBL5JosV0+SDINTlCG0cmigHuBOyWzYmjgca+mtQu4WczCaApNaSuVqgb8u7Bd9GCOL4YJotvV5+81frlSwQXralhwRzGhj/A57CGPgGKiuPT+AOGmykIGEZsSD9RKkyoKIoc0OS8CPIzdBOtTQCIwrLn2FxI83Clcg55W8gkFSOS6rWNbG5qFZWMll6yl02HtunalHmUlRUL66YeGXdMDC2PuRcmZbGO5a/2tbVppW6mfSWG3NPRpgwIDAQAB",
            holder: "Nome Sobrenome",
            number: cardNumber,
            expMonth: "12",
            expYear: "2026",
            securityCode: securityCode
        });

    } catch (error) {
        card.hasErrors = true;
    }

    const hasErrors = card.hasErrors;

    const elementId = cardNumber + "-tooltip";

    if (hasErrors) {
        const message = "Ocorreu um erro.\nTente novamente mais tarde.";
        setEncryptCardTooltipMessage(elementId, message);
    } else {
        copyToClipboard(card.encryptedCard);
        setEncryptCardTooltipMessage(elementId, "Criptograma copiado!");
    }
};


const integrations = {
  "platforms": [
    {
      "name": "001 Shop",
      "link": "https://001shop.com.br/",
      "internalLink": "001-shop",
      "apis": [
        {
          "apiName": "V2 - Checkout transparente (depreciada)",
          "features": [
            "Transações via cartão de crédito",
            "Boleto bancário",
            "Gestão de risco (Antifraude)",
            "Estorno e cancelamento",
            "Notificação/Consulta"
          ]
        },
        {
          "apiName": "API Connect + Checkout PagBank",
          "features": [
            "Transações via Crédito",
            "Boleto",
            "PIX",
            "Notificação"
          ]
        }
      ]
    },
    {
      "name": "2RS",
      "link": "",
      "internalLink": "",
      "apis": []
    },
    {
      "name": "Accesso",
      "link": "",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado com captura automática",
            "Captura automática",
            "Boleto",
            "Transações via PIX",
            "Gestão de risco (Antifraude)",
            "Estorno e cancelamento total",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "AcessoWeb",
      "link": "https://www.acessoweb.com/",
      "internalLink": "",
      "apis": []
    },
    {
      "name": "Adaltech",
      "link": "http://www.adaltech.com.br",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Boleto",
            "Transações via PIX",
            "Gestão de risco (Antifraude)",
            "Captura posterior",
            "Estorno e cancelamento total",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Add Mall",
      "link": "https://addmall.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Transações via PIX",
            "Boleto",
            "Notificação e consulta"
          ]
        }
      ]
    },
    {
      "name": "Add Suite",
      "link": "https://www.addsuite.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Adoorei",
      "link": "https://www.adoorei.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Transações via PIX",
            "Boleto",
            "Notificação e consulta"
          ]
        }
      ]
    },
    {
      "name": "Adsomos",
      "link": "https://adsomos.com/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Transações via PIX",
            "Boleto",
            "Débito com autenticação 3DS",
            "Notificação e consulta"
          ]
        }
      ]
    },
    {
      "name": "Agência Weber",
      "link": "https://agenciaweber.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Boleto",
            "Transações via PIX",
            "Cartão de débito com autenticação 3DS",
            "Repasse de juros",
            "Notificação e consulta"
          ]
        }
      ]
    },
    {
      "name": "Alpha Sistemas ",
      "link": "https://alphasystemas.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "V4 - API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Transações via PIX",
            "Boleto",
            "Notificação/consulta"
          ]
        }
      ]
    },
    {
      "name": "Alquimidia",
      "link": "https://alquimidia.org/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Amlabs (Mercúrio)",
      "link": "https://www.amlabs.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Transações via PIX",
            "Boleto",
            "Notificação/consulta"
          ]
        }
      ]
    },
    {
      "name": "App AtendeSmart",
      "link": "https://www.atendesmart.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect SMS / Authorization e Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Boleto",
            "PIX",
            "Notificação/consulta"
          ]
        }
      ]
    },
    {
      "name": "App mercados",
      "link": "",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Cartão de crédito criptografado",
            "Captura Automatica",
            "Boleto",
            "PIX",
            "Webhook",
            "Estorno/cancelamento"
          ]
        }
      ]
    },
    {
      "name": "Auryn Web To Print",
      "link": "https://www.auryn.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Cartão de crédito criptografado",
            "Boleto",
            "Pix QrCode",
            "Estorno total",
            "Notificação e consulta"
          ]
        }
      ]
    },
    {
      "name": "Axis MobFintech",
      "link": "https://axis-mobfintech.com/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito (PCI)",
            "Boleto",
            "PIX",
            "Gestão de Risco (Antifraude)",
            "Estorno/Cancelamento total e parcial",
            "Captura Automatica e Pré-Auth",
            "Zero Dollar",
            "Split de pagamentos"
          ]
        }
      ]
    },
    {
      "name": "B4 Commerce",
      "link": "https://www.b4x.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Charge (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado com captura automática",
            "Cancelamento/estorno total",
            "Notificações"
          ]
        }
      ]
    },
    {
      "name": "Bagy",
      "link": "https://bagy.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Betalabs",
      "link": "https://betalabs.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Boletos",
            "Notificação e consulta"
          ]
        }
      ]
    },
    {
      "name": "BeuniqeApp",
      "link": "",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Cartão de Crédito criptografado",
            "Boleto"
          ]
        }
      ]
    },
    {
      "name": "Big Bang Shop",
      "link": "https://www.bigshop.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Bis2bis",
      "link": "https://www.bis2bis.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API PIX",
          "features": []
        }
      ]
    },
    {
      "name": "Blip Food",
      "link": "",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Transações via PIX",
            "Notificação e consulta"
          ]
        }
      ]
    },
    {
      "name": "Braavo",
      "link": "https://www.braavo.com.br/",
      "internalLink": "braavo",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito com captura automática",
            "Boleto",
            "PIX",
            "Estorno e Cancelamento total",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Brasil na Web",
      "link": "https://www.brasilnaweb.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito com captura automática",
            "PIX",
            "Tokenização",
            "Estorno e Cancelamento total",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "BrasPag",
      "link": "https://www.braspag.com.br/",
      "internalLink": "braspag",
      "apis": [
        {
          "apiName": "Connect + API Charge (checkout transparente)",
          "features": [
            "Captura automática",
            "Captura total posterior",
            "Cancelamento/estorno total",
            "Recorrência (acoplado ao gateway de pagamentos)",
            "Tokenização (acoplado ao gateway de pagamentos)",
            "Soft Descriptor para identificação na fatura do comprador"
          ]
        }
      ]
    },
    {
      "name": "BW Commerce",
      "link": "https://www.bwcommerce.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "C2TI",
      "link": "https://c2ti.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Cardapex",
      "link": "https://www.cardapex.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito com captura automática",
            "PIX",
            "Tokenização",
            "Estorno e Cancelamento total",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Cardapex (Wix, CardaFran, Flex Cardápio, Já Entrego, Soma Menu, YZFood)",
      "link": "https://www.cardapex.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente) + API Accounts",
          "features": [
            "Transações via cartão de crédito criptografado com captura automática",
            "PIX",
            "Cartão de débito com autenticação 3DS",
            "Estorno e Cancelamento total",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Cardaz",
      "link": "https://www.cardaz.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Cartão de Crédito criptografado",
            "PIX",
            "Estorno",
            "Cartão de Débito com autenticação 3DS",
            "Notificação"
          ]
        }
      ]
    },
    {
      "name": "Cartpanda",
      "link": "https://cartpanda.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Charge",
          "features": [
            "Transações via cartão de crédito criptografado com captura automática",
            "PIX",
            "Estorno e Cancelamento total",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Catzap",
      "link": "",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado com captura automática",
            "PIX",
            "Cartão de débito com autenticação 3DS",
            "Estorno e Cancelamento total",
            "Notificação/Consulta"
          ]
        },
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente) + API Accounts",
          "features": [
            "Cartão de Crédito criptografado",
            "Cartão de Débito com autenticação 3DS",
            "PIX",
            "Estorno",
            "Notificação"
          ]
        }
      ]
    },
    {
      "name": "Cis Assessment",
      "link": "https://cisassessment.com/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect (SMS) + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Cartão de crédito criptografado",
            "Captura Automatica",
            "Webhook"
          ]
        }
      ]
    },
    {
      "name": "Climba Commerce",
      "link": "https://www.climba.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Cartão de crédito criptografado",
            "Boleto",
            "Captura Automática",
            "Estorno total e parcial",
            "webhook"
          ]
        }
      ]
    },
    {
      "name": "Commerce i9",
      "link": "https://commercei9.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Cartão de crédito criptografado",
            "Boleto",
            "Pix QrCode",
            "Estorno total",
            "Notificação e consulta"
          ]
        }
      ]
    },
    {
      "name": "CommercePlus",
      "link": "https://commerceplus.website/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado com captura automática",
            "PIX",
            "Boleto"
          ]
        }
      ]
    },
    {
      "name": "Conecta Venda",
      "link": "https://assine.conectavenda.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado com captura automática",
            "PIX",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Construsite",
      "link": "https://www.construsitebrasil.com/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "ContaMedi+",
      "link": "https://contamedi.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado com captura automática e captura posterior",
            "Flag de recorrência",
            "Tokenização de cartão",
            "Estorno e Cancelamento total"
          ]
        }
      ]
    },
    {
      "name": "ContaMedi+",
      "link": "https://contamedi.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado com captura automática e captura posterior",
            "Flag de recorrência",
            "Tokenização de cartão",
            "Estorno e Cancelamento total"
          ]
        }
      ]
    },
    {
      "name": "Convertize",
      "link": "https://www.convertize.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Delivery Seguro",
      "link": "https://deliveryseguro.com/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Dex Works",
      "link": "https://dexworks.com/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Diatech Sistemas",
      "link": "https://www.diatechsistemas.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "Connect + Pedidos e pagamentos (checkout transparente) + Checkout PagBank",
          "features": [
            "Criação de checkout",
            "Consulta de pedidos criados"
          ]
        }
      ]
    },
    {
      "name": "Digita",
      "link": "",
      "internalLink": "",
      "apis": [
        {
          "apiName": "V2 - Checkout transparente (depreciada) - MONOLITO",
          "features": [
            "Split de pagamento",
            "Transações Via Cartão de Crédito à vista e parcelado",
            "Boleto Bancário",
            "Gestão de Risco (Antifraude)",
            "Estorno e Cancelamento",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Digital Manager Guru",
      "link": "https://digitalmanager.guru/",
      "internalLink": "digital-manager-guru",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Boleto",
            "PIX",
            "3DS",
            "Gestão de Risco (Antifraude)",
            "Captura Posterior",
            "Estorno e Cancelamento total",
            "Notificação/Consulta",
            "Zero Dóllar",
            "Split (Boleto e Cartão e piloto para PIX)"
          ]
        }
      ]
    },
    {
      "name": "DLoja Virtual",
      "link": "",
      "internalLink": "dloja-processo-de-integracao",
      "apis": [
        {
          "apiName": "V2 - Checkout transparente (depreciada) - MONOLITO + Modelo de aplicação",
          "features": [
            "Transações via cartão de crédito",
            "Boleto Bancário",
            "Estorno e Cancelamento",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Dooca",
      "link": "dooca",
      "internalLink": "https://www.dooca.com.br/",
      "apis": [
        {
          "apiName": "V2 - Checkout transparente (depreciada) - MONOLITO",
          "features": [
            "Transações Via Cartão de Crédito à vista e parcelado",
            "Boleto bancário",
            "Gestão de risco (Antifraude)",
            "Estorno e cancelamento",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Dype Eventos",
      "link": "",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Checkout PagBank",
          "features": [
            "Criação de Checkout",
            "Ativação/Inativação de Checkout",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "E-com.club",
      "link": "",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Economato",
      "link": "https://economato.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Charge",
          "features": [
            "Transações via cartão de crédito criptografado com captura automática",
            "Tokenização"
          ]
        }
      ]
    },
    {
      "name": "ECShop Commerce",
      "link": "https://www.ecshop.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "EduSoft",
      "link": "https://edusoft.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect (Authorization) + Checkout PagBank",
          "features": []
        }
      ]
    },
    {
      "name": "ElevenUP",
      "link": "",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Elosgate",
      "link": "",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Empório Mania Vix",
      "link": "",
      "internalLink": "",
      "apis": [
        {
          "apiName": "Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Cartão de crédito criptografado",
            "Captura Automatica",
            "PIX",
            "Webhook",
            "Estorno/cancelamento",
            "Tokenização"
          ]
        }
      ]
    },
    {
      "name": "EstejaOn",
      "link": "",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "PIX",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Estudio Aulas",
      "link": "https://www.estudioaulas.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "F1 Commerce",
      "link": "https://www.f1commerce.com/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Fast Hotel",
      "link": "https://fasthotel.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado com captura automática",
            "Gestão de Risco (Antifraude)",
            "Captura Automática",
            "Estorno e cancelamento total",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "FastCommerce",
      "link": "https://www.fastcommerce.com.br/",
      "internalLink": "fast-commerce",
      "apis": [
        {
          "apiName": "V2 - Checkout redirect e transparente (depreciada) - MONOLITO",
          "features": [
            "Modelo de aplicação",
            "Transações Via Cartão de Crédito à vista e parcelado",
            "Boleto bancário",
            "Gestão de risco (Antifraude)",
            "Estorno e cancelamento",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "FDC Sistemas",
      "link": "https://www.fdcsistemas.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado com captura automática",
            "Boleto",
            "PIX,",
            "Estorno total",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Fleeky",
      "link": "https://www.fleeky.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Boleto",
            "PIX",
            "Notificação e consulta"
          ]
        }
      ]
    },
    {
      "name": "Foco Multimidia",
      "link": "https://focomultimidia.com/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito",
            "PCI-DSS",
            "Gestão de Risco (Antifraude)",
            "Estorno e cancelamento total"
          ]
        }
      ]
    },
    {
      "name": "GalaxCommerce",
      "link": "https://www.galaxcommerce.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "PIX",
            "Notificação e consulta",
            "Estorno/Cancelamento total"
          ]
        }
      ]
    },
    {
      "name": "cel_cash (antiga Galaxpay)",
      "link": "https://www.celcoin.com.br/cel_cash/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Charge",
          "features": [
            "Cartão de crédito com captura automatica, não criptografado (PCI)",
            "Notificação/Consulta",
            "Flag de recorrência"
          ]
        }
      ]
    },
    {
      "name": "Galaxy",
      "link": "",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "GestãoClick",
      "link": "https://gestaoclick.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente) + Checkout PagBank",
          "features": [
            "Transação com cartão de crédito criptografado",
            "Captura Automatica",
            "Transação com boleto e PIX",
            "Webhook"
          ]
        }
      ]
    },
    {
      "name": "Girafa",
      "link": "https://www.girafa.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "VAPI Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Boleto",
            "PIX",
            "Gestão de risco (Antifraude)",
            "Captura automatica",
            "Captura posterior",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Global EAD",
      "link": "https://globalead.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Icaro Andrade",
      "link": "https://testelocacao.icaroandrade.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Iglu Online",
      "link": "https://igluonline.com/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Boleto",
            "Gestão de Risco (Antifraude)",
            "Captura Automatica",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Iluria",
      "link": "http://www.iluria.com.br/",
      "internalLink": "iluria-processo-de-integracao",
      "apis": [
        {
          "apiName": "V2 - Checkout transparente (depreciada) - MONOLITO",
          "features": [
            "Modelo de aplicação",
            "Transações Via Cartão de Crédito à vista e parcelado",
            "Boleto bancário",
            "Gestão de risco (Antifraude)",
            "Estorno e cancelamento",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Ipagare",
      "link": "https://www.ipagare.com/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Ipoom Web",
      "link": "https://www.ipoomweb.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Irroba",
      "link": "https://www.irroba.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "V2 - Checkout transparente (depreciada) - MONOLITO",
          "features": [
            "Modelo de aplicação",
            "Transações via cartão de crédito",
            "Boleto bancário",
            "Gestão de risco (Antifraude)",
            "Estorno e cancelamento",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "iSet",
      "link": "https://www.iset.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + API Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Cartão de crédito criptografado",
            "Boleto",
            "Pix QrCode",
            "Estorno total e parcial",
            "Notificação e consulta"
          ]
        }
      ]
    },
    {
      "name": "Jet Commerce Lite",
      "link": "https://jetecommerce.com.br/",
      "internalLink": "jetcommerce-processo-de-integracao",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via Cartão de Crédito à vista e parcelado",
            "Boleto",
            "PIX",
            "Gestão de risco (Antifraude)",
            "Captura posterior",
            "Estorno e cancelamento total",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Jet Evolution",
      "link": "",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Jet Evolution",
      "link": "https://conteudo.jetecommerce.com.br/evolucao-com-jet-neo-ty",
      "internalLink": "",
      "apis": [
        {
          "apiName": "V2 - Checkout transparente (depreciada) - MONOLITO",
          "features": [
            "Transações via cartão de crédito",
            "Boleto bancário",
            "Gestão de risco (Antifraude)",
            "Estorno e cancelamento",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "KasterWeb",
      "link": "https://www.kasterweb.com/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Cartão de crédito criptografado",
            "PIX",
            "Boleto",
            "Captura Posterior",
            "Captura automatica"
          ]
        }
      ]
    },
    {
      "name": "Ki Delivery",
      "link": "https://kidelivery.com/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Linx",
      "link": "https://www.linx.com.br/",
      "internalLink": "integrando-linx-com-pagbank",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Criação de pedidos com Split (Cartão)",
            "Cartão de crédito criptografado",
            "PIX",
            "Boleto",
            "Débito 3DS (PagBank)",
            "Captura posterior",
            "Captura automática",
            "Estorno total"
          ]
        }
      ]
    },
    {
      "name": "LiquidWorks",
      "link": "https://www.liquidworks.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente) + Accounts",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Split de pagamento com crédito",
            "Gestão de risco (Antifraude)",
            "Estorno/Cancelamento total e parcial",
            "Zero Dollar"
          ]
        }
      ]
    },
    {
      "name": "Loja 2",
      "link": "",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Loja Integrada D14, D30, Taxa Negociada",
      "link": "",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente) + Checkout PagBank",
          "features": [
            "Transações via Cartão de Crédito à vista e parcelado",
            "Boleto",
            "PIX",
            "Captura Automatica",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Loja Integrada",
      "link": "https://criar.lojaintegrada.com.br/",
      "internalLink": "loja-integrada-processo-de-integracao",
      "apis": [
        {
          "apiName": "V2 - Checkout redirect e checkout transparente (depreciada) - MONOLITO",
          "features": [
            "Transações Via Cartão de Crédito à vista e parcelado",
            "Boleto Bancário",
            "Gestão de Risco (Antifraude)",
            "Estorno e Cancelamento",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Loja que vende",
      "link": "https://store.lojaquevende.com.br/",
      "internalLink": "lojaquevende-processo-de-integracao",
      "apis": [
        {
          "apiName": "V2 - Checkout transparente (depreciada) - MONOLITO",
          "features": [
            "Transações via cartão de crédito",
            "Boleto bancário",
            "Gestão de risco (Antifraude)",
            "Estorno e cancelamento",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Lojas Virtuais BR",
      "link": "https://www.lojasvirtuais-br.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Lojista Online",
      "link": "https://lojistaonline.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Lundi Sistemas",
      "link": "https://www.lundi.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Pagamento com cartão de crédito criptografado",
            "PIX",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Magento",
      "link": "https://shopmagento.com.br/",
      "internalLink": "modulo-magento",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Boleto",
            "PIX",
            "Gestão de risco (Antifraude)",
            "Captura posterior",
            "Estorno e cancelamento total",
            "Notificação/Consulta",
            "Split com pix"
          ]
        }
      ]
    },
    {
      "name": "Malga",
      "link": "https://malga.io/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via Cartão de Crédito à vista e parcelado",
            "PIX",
            "Gestão de Risco (Antifraude)",
            "Captura automatica",
            "Zero Dollar",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "MarketUP",
      "link": "https://marketup.com/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Marlim",
      "link": "",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Max Scalla",
      "link": "https://maxscalla.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Checkout PagBank",
          "features": [
            "Criação de Checkout",
            "Pagamento com cartão de crédito",
            "Ativação/Inativação de Checkout",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Meloja",
      "link": "https://www.meloja.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Boleto",
            "PIX",
            "Notificação e consulta"
          ]
        }
      ]
    },
    {
      "name": "MemberKit",
      "link": "https://memberkit.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Menu Dino",
      "link": "https://menudino.com/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Boleto",
            "PIX",
            "Gestão de risco (Antifraude)",
            "Captura posterior",
            "Estorno e cancelamento total",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Mix Madeiras",
      "link": "https://mixmadeiras.com/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "V4 - API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado com captura automática",
            "Transações via PIX",
            "Estorno e cancelamento total",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Moovin",
      "link": "https://www.moovin.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "V2 - Checkout transparente (depreciada) - MONOLITO",
          "features": [
            "Transações Via Cartão de Crédito à vista e parcelado",
            "Boleto bancário",
            "Gestão de risco (Antifraude)",
            "Estorno e cancelamento",
            "Notificação/Consulta"
          ]
        },
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações cartões de crédito com cartão criptografado",
            "PIX",
            "Captura automática",
            "Notificação/Consulta",
            "Estorno/Cancelamento"
          ]
        }
      ]
    },
    {
      "name": "Mymento",
      "link": "https://mymento.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "V4 - API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "PIX",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "N49",
      "link": "https://n49.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado com captura automática",
            "Boleto",
            "PIX",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Ninegrid",
      "link": "https://ninegrid.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado com captura automática",
            "PIX",
            "Gestão de risco (Antifraude)",
            "Estorno e cancelamento total",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Nubalaio",
      "link": "https://app.nubalaio.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Nupedido",
      "link": "https://nupedido.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via Cartão de Crédito à vista e parcelado",
            "Gestão de Risco (Antifraude)",
            "Captura Automatica",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Nuvemshop",
      "link": "https://www.nuvemshop.com.br/",
      "internalLink": "integrar-nuvemshop",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Boleto",
            "PIX",
            "Carteira digital PagBank",
            "Gestão de risco (Antifraude)",
            "Captura posterior",
            "Estorno e cancelamento total",
            "Notificação/Consulta",
            "Repasse de Juros"
          ]
        }
      ]
    },
    {
      "name": "OpenCart (Code Market)",
      "link": "https://www.opencart.com/",
      "internalLink": "opencart-processo-de-integracao",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Oracle",
      "link": "https://www.oracle.com/br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Organeasy",
      "link": "https://www.organeasydigital.com/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Cartão de crédito criptografado",
            "Captura automatica",
            "Tokenização de cartão",
            "Webhook"
          ]
        }
      ]
    },
    {
      "name": "Oruc",
      "link": "https://www.oruc.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "OutGo",
      "link": "https://outgo.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Pagar.me",
      "link": "https://pagar.me/",
      "internalLink": "integrando-pagarme",
      "apis": [
        {
          "apiName": "API v4 Charge (Checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado com captura automática",
            "Captura total posterior",
            "Cancelamento/estorno total",
            "Recorrência (acoplado ao gateway de pagamentos)",
            "Tokenização (acoplado ao gateway de pagamentos)",
            "Soft Descriptor para identificação na fatura do comprador",
            "Sub Merchant"
          ]
        }
      ]
    },
    {
      "name": "PagTickets",
      "link": "https://pagtickets.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect (Authorization) + API Pedidos e pagamentos",
          "features": [
            "Crédito criptografado",
            "Captura Automatica",
            "Boleto",
            "PIX",
            "3DS Interno",
            "Webhook",
            "Estorno total",
            "Split de pagamentos (Crédito, boleto e pix)"
          ]
        }
      ]
    },
    {
      "name": "Paycloud",
      "link": "https://paycloud.com.br",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Paytour",
      "link": "https://www.paytour.com.br/",
      "internalLink": "paytour-processo-de-integracao",
      "apis": [
        {
          "apiName": "V2 - Checkout transparente (depreciada) - MONOLITO",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Boleto bancário",
            "Gestão de risco (Antifraude)",
            "Estorno e cancelamento",
            "Notificação/Consulta"
          ]
        },
        {
          "apiName": "Connect + API Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Cartão de crédito Criptografado",
            "Cartão de débito (3DS Interno)",
            "Boleto",
            "PIX",
            "Estorno total/parcial",
            "Webhook"
          ]
        }
      ]
    },
    {
      "name": "PedidoOK",
      "link": "https://www.pedidook.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "Connect  + Order + Checkout PagBank",
          "features": [
            "Boleto"
          ]
        }
      ]
    },
    {
      "name": "Pet Anjo (Cobasi)",
      "link": "https://petanjo.com/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + API Pedidos e pagamentos (checkout transparente) + API Split",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Boleto",
            "PIX",
            "Split de pagamentos - Order",
            "Captura automática",
            "Estorno e cancelamento parcial e total",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "PhotoJob",
      "link": "https://www.photojob.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "Connect + Pedidos e pagamentos (checkout transparente) + Checkout PagBank",
          "features": [
            "Criação de checkout",
            "Consulta de pedidos criados"
          ]
        }
      ]
    },
    {
      "name": "Pix Digital",
      "link": "",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "PlugPagamentos",
      "link": "",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos V4(checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Boleto",
            "PIX",
            "Gestão de risco (Antifraude)",
            "Captura posterior",
            "Estorno e cancelamento total",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Plus Net",
      "link": "https://plusnetbrasil.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Poolpay",
      "link": "https://poolpay.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Captura automática",
            "Boleto",
            "PIX",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Portal do Seller",
      "link": "https://www.portaldoseller.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Cartão de crédito criptografado",
            "Captura Automatica",
            "Boleto",
            "PIX",
            "Webhook"
          ]
        }
      ]
    },
    {
      "name": "Precode",
      "link": "https://empresa.precode.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Captura automática",
            "Boleto",
            "PIX",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "PrestaShop",
      "link": "https://empresa.precode.com.br/",
      "internalLink": "integrando-prestashop-com-pagbank",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Boleto",
            "PIX",
            "3DS",
            "Carteira digital PagBank",
            "Gestão de risco (Antifraude)",
            "Captura posterior",
            "Estorno e cancelamento total",
            "Repasse de juros",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Programas Sites",
      "link": "",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Prumo Digital",
      "link": "https://prumo.digital/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Ranking de tenis",
      "link": "https://www.rankingdetenis.com/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via PIX",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Ricardo Martins",
      "link": "https://ricardomartinsbroker.com.br/",
      "internalLink": "ricardo-martins",
      "apis": [
        {
          "apiName": "V2 - Checkout redirect e transparente (depreciada) - MONOLITO",
          "features": [
            "Transações Via Cartão de Crédito à vista e parcelado",
            "Boleto Bancário",
            "Gestão de Risco (Antifraude)",
            "Estorno e Cancelamento",
            "Notificação/Consulta"
          ]
        },
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via Cartão de Crédito à vista e parcelado",
            "Transações via Cartão de Débito com 3DS",
            "Boleto",
            "PIX",
            "Captura Automatica",
            "Estorno e Cancelamento total",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Saturn System",
      "link": "https://saturnsystem.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via Cartão de Crédito à vista e parcelado",
            "Boleto",
            "PIX",
            "Gestão de Risco (Antifraude)",
            "Captura automatica",
            "Estorno e cancelamento total",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Shopify",
      "link": "https://www.shopify.com/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado à vista e parcelado",
            "Debito (3DS)",
            "Boleto",
            "PIX",
            "Gestão de risco (Antifraude)",
            "Captura posterior",
            "Estorno e cancelamento total",
            "Repasse de Juros",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Siapp.one",
      "link": "https://siapp.one/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + API Order + API Split",
          "features": [
            "Transações via cartão de crédito criptografado",
            "PIX",
            "Split de pagamentos",
            "Captura automática",
            "Estorno e cancelamento total",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "SicOk",
      "link": "https://www.sicok.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "SM Places",
      "link": "https://www.smplaces.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "V2 - Checkout transparente (depreciada) - MONOLITO",
          "features": [
            "Transações Via Cartão de Crédito à vista e parcelado",
            "Boleto Bancário",
            "Gestão de Risco (Antifraude)",
            "Estorno e Cancelamento",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "SmartPag",
      "link": "https://smartpag.app/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Cartão de crédito criptografado",
            "Pix QrCode",
            "Estorno total",
            "Notificação e consulta"
          ]
        }
      ]
    },
    {
      "name": "Soulmkt",
      "link": "https://soulmkt.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Superticket Tecnologia",
      "link": "",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via Cartão de Crédito à vista e parcelado",
            "Transações via Débito com Autenticação 3DS",
            "PIX",
            "Gestão de risco (Antifraude)",
            "Captura automatica",
            "Captura posterior",
            "Estorno e cancelamento total",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "TCS Sistemas",
      "link": "https://tcssistemas.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado com captura automática",
            "Boleto",
            "PIX"
          ]
        }
      ]
    },
    {
      "name": "TecSoft",
      "link": "https://www.tecsoft.ind.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via Cartão de Crédito criptografado com captura automática",
            "Boleto",
            "PIX",
            "Notificação e consulta",
            "Estorno/Cancelamento total"
          ]
        }
      ]
    },
    {
      "name": "TrayCommerce",
      "link": "https://www.tray.com.br/",
      "internalLink": "tray",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via Cartão de Crédito criptografado",
            "Boleto",
            "PIX",
            "Notificação e consulta",
            "Estorno/Cancelamento total"
          ]
        }
      ]
    },
    {
      "name": "Tuna",
      "link": "https://dev.tuna.uy/portal/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito",
            "Captura automática",
            "Estorno e cancelamento total",
            "Notificação e consulta"
          ]
        }
      ]
    },
    {
      "name": "Tutor",
      "link": "https://www.tutor.do/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "UOLHost",
      "link": "https://uolhost.uol.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "V2 - Checkout redirect e checkout transparente (depreciada) - MONOLITO",
          "features": [
            "Transações Via Cartão de Crédito à vista e parcelado",
            "Boleto Bancário",
            "Gestão de Risco (Antifraude)",
            "Estorno e Cancelamento",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Up Ingressos",
      "link": "https://www.upingressos.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito",
            "Gestão de Risco (Antifraude)",
            "Captura Automatica",
            "Estorno e Cancelamento total",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Up to date eventos",
      "link": "",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Vega Checkout",
      "link": "https://page.vegacheckout.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "VIP Commerce",
      "link": "https://www.vipcommerce.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via Cartão de Crédito à vista e parcelado",
            "PIX",
            "Gestão de Risco (Antifraude)",
            "Captura Automatica",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Virtuaria (Plugin WooCommerce)",
      "link": "https://virtuaria.com.br/",
      "internalLink": "passo-a-passo-integração",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente) + Split de pagamentos",
          "features": [
            "Transações via cartão de crédito",
            "Boleto",
            "PIX",
            "Gestão de risco (Antifraude)",
            "Captura posterior",
            "Estorno e cancelamento total",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "VirtUOL",
      "link": "https://conta.uol.com.br/login?dest=https://meupainelhost.uol.com.br/&t=uolhost",
      "internalLink": "integrando-virtuol-com-pagbank",
      "apis": [
        {
          "apiName": "V2 - Checkout transparente (depreciada) - MONOLITO",
          "features": [
            "Transações Via Cartão de Crédito à vista e parcelado",
            "Boleto Bancário",
            "Gestão de Risco (Antifraude)",
            "Estorno e Cancelamento",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "VNDA",
      "link": "https://www.vnda.com.br/",
      "internalLink": "vnda-integracao-v3",
      "apis": [
        {
          "apiName": "V2 - Checkout transparente (depreciada) - MONOLITO",
          "features": [
            "Transações Via Cartão de Crédito à vista e parcelado",
            "Boleto Bancário",
            "Gestão de Risco (Antifraude)",
            "Estorno e Cancelamento",
            "Notificação/Consulta"
          ]
        },
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito",
            "Boleto",
            "Gestão de risco (Antifraude)",
            "Captura posterior",
            "Estorno e cancelamento total",
            "Repasse de Juros",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "VTEX",
      "link": "https://vision.vtex.com/",
      "internalLink": "integrando-conector-pagbankv3-vtex",
      "apis": [
        {
          "apiName": "V2 - Checkout transparente (Monolito)",
          "features": [
            "Checkout PagSeguro",
            "Checkout Transparente",
            "Cartão de crédito",
            "Boleto",
            "Estorno total",
            "Cancelamento, consulta e notificação"
          ]
        },
        {
          "apiName": "Pedidos e pagamentos (checkout transparente Nova API) + Split",
          "features": [
            "Transações via Cartão de Crédito à vista e parcelado",
            "Bandeiras aceitas: Mastercard, Visa, Elo, Hipercard, Hiper, American Express, Diners e Aura",
            "Pagamentos com 2 cartões (feature nativa da plataforma VTEX)",
            "One click buy (feature nativa da plataforma VTEX)",
            "Transações via PIX",
            "Gestão de Risco (Antifraude)",
            "Estorno e Cancelamento total",
            "Estorno e Cancelamento parcial (cartão de crédito, boleto e pix)",
            "Notificação/Consulta",
            "Flag Recorrência (Motor fica do lado da VTEX)"
          ]
        }
      ]
    },
    {
      "name": "Wave Lojas Virtuais",
      "link": "https://www.wavelojasvirtuais.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito",
            "Boleto",
            "PIX",
            "Gestão de risco (Antifraude)",
            "Captura automatica",
            "Estorno e cancelamento total",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Wbuy",
      "link": "https://www.wbuy.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito",
            "Boleto",
            "PIX",
            "Gestão de risco (Antifraude)",
            "Captura automatica",
            "Estorno e cancelamento total",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "WebGraficas",
      "link": "https://www.webgraficas.com/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "Connect + Order + Checkout PagBank",
          "features": [
            "Boleto",
            "Criação de checkout",
            "PIX"
          ]
        }
      ]
    },
    {
      "name": "Webstore",
      "link": "https://webstore.com.br/",
      "internalLink": "webstore-processo-de-integracao",
      "apis": [
        {
          "apiName": "V2 - Checkout redirect e checkout transparente (depreciada) - MONOLITO",
          "features": [
            "Transações Via Cartão de Crédito à vista e parcelado",
            "Boleto Bancário",
            "Gestão de Risco (Antifraude)",
            "Estorno e Cancelamento",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "WebStorm",
      "link": "https://www.webstorm.com.br/",
      "internalLink": "webstorm",
      "apis": [
        {
          "apiName": "V2 - Checkout transparente (depreciada)",
          "features": [
            "Transações via cartão de crédito",
            "Boleto bancário",
            "Gestão de risco (Antifraude)",
            "Estorno e cancelamento",
            "Notificação/Consulta"
          ]
        },
      ]
    },
    {
      "name": "WhatsApp",
      "link": "https://www.whatsapp.com/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "Wix",
      "link": "https://pt.wix.com/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "V2 - Checkout redirect (depreciada) - MONOLITO",
          "features": [
            "Transações Via Cartão de Crédito à vista e parcelado",
            "Boleto Bancário",
            "Gestão de Risco (Antifraude)",
            "Estorno e Cancelamento",
            "Notificação/Consulta"
          ]
        },
        {
          "apiName": "V4 - API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            ""
          ]
        }
      ]
    },
    {
      "name": "Woo Commerce",
      "link": "https://woocommerce.com/pt-br/",
      "internalLink": "processo-de-integracao-woocommerce",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Tokenização de cartões",
            "Boleto",
            "PIX",
            "Gestão de Risco (Antifraude)",
            "Estorno e Cancelamento total",
            "Repasse de juros",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "WV Todoz",
      "link": "https://www.wvtodoz.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "WX3",
      "link": "https://www.wx3.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Boleto",
            "PIX",
            "Gestão de Risco (Antifraude)",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "X-commerce",
      "link": "https://stage.xcommerceweb.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "",
          "features": []
        }
      ]
    },
    {
      "name": "XTech",
      "link": "https://portal.xtech.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "V2 - Checkout transparente (depreciada) - MONOLITO",
          "features": [
            "Modelo de aplicação",
            "Transações Via Cartão de Crédito à vista e parcelado",
            "Boleto Bancário",
            "Gestão de Risco (Antifraude)",
            "Estorno e Cancelamento",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Yampi",
      "link": "https://www.yampi.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações com cartão de crédito",
            "Boleto",
            "PIX",
            "Tokenização de cartão",
            "Webhook"
          ]
        }
      ]
    },
    {
      "name": "Yuno",
      "link": "https://www.y.uno/pt-br",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações com cartão de crédito (PCI)",
            "Boleto",
            "PIX",
            "3DS externo",
            "Captura automática e pré auth",
            "Estorno parcial e total",
            "Webhook",
            "Submerchant"
          ]
        }
      ]
    },
    {
      "name": "Zap Fácil",
      "link": "https://zapfacil.com/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Boleto",
            "PIX",
            "Gestão de Risco (Antifraude)",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "Wake",
      "link": "https://wake.tech/wake-commerce/",
      "internalLink": "wake",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito",
            "Boleto",
            "PIX",
            "Gestão de risco (Antifraude)",
            "Captura posterior",
            "Estorno e cancelamento total",
            "Notificação/Consulta",
            "Repasse de juros e criptografia"
          ]
        }
      ]
    },
    {
      "name": "Velo Shop",
      "link": "",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Captura Automática",
            "Webhook",
          ]
        }
      ]
    },
    {
      "name": "Comitê Web",
      "link": "https://www.comiteweb.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Captura Automática",
            "Webhook",
          ]
        }
      ]
    },
    {
      "name": "eCommerce-net",
      "link": "https://www.ecommercenet.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Captura Automática",
            "Boleto",
          ]
        }
      ]
    },
    {
      "name": "ZapCommerce",
      "link": "https://app.jetomni.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "V2 - Checkout transparente (depreciada) - MONOLITO",
          "features": [
            "Transações Via Cartão de Crédito à vista e parcelado",
            "Boleto Bancário",
            "Gestão de Risco (Antifraude)",
            "Estorno e Cancelamento",
            "Notificação/Consulta"
          ]
        }
      ]
    },
    {
      "name": "CodeTrading",
      "link": "https://codetrading.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado (Split)",
            "Captura automática",
            "Boleto (Split)",
            "Webhook",
          ]
        }
      ]
    },
    {
      "name": "Olha o ingresso",
      "link": "https://olhaoingresso.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações com cartão de crédito (PCI)",
            "Pré-autorização + Captura",
            "Estorno/Cancelamento"
          ]
        }
      ]
    },
    {
      "name": "Portal Community",
      "link": "",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado (Split)",
            "Captura automática",
            "PIX (Split)",
            "Webhook"
          ]
        }
      ]
    },
    {
      "name": "DigitalWEB",
      "link": "https://www.digitalwebteam.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Captura automática",
            "PIX",
            "Webhook"
          ]
        }
      ]
    },
    {
      "name": "Visual E-commerce",
      "link": "https://www.visualecommerce.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Captura automática",
            "PIX",
            "Boleto",
            "Webhook"
          ]
        }
      ]
    },
    {
      "name": "K13",
      "link": "https://k13.com.br/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Captura automática",
            "PIX",
            "Boleto",
            "Webhook"
          ]
        }
      ]
    },
    {
      "name": "Firefly Technology",
      "link": "https://www.fireflytech.com/",
      "internalLink": "",
      "apis": [
        {
          "apiName": "API Connect + API Order com Split + API Accounts e API Zero Dollar",
          "features": [
            "Transações via cartão de crédito criptografado",
            "Split de pagamentos",
            "Tokenização",
            "PIX",
            "Pré-autorização e Captura automática",
            "Webhook"
          ]
        }
      ]
    },
    {
      "name": "Grupo diRoma",
      "link": "",
      "internalLink": "",
      "apis": [
        {
          "apiName": "Connect + Pedidos e pagamentos (checkout transparente)",
          "features": [
            "PIX",
            "Webhook"
          ]
        }
      ]
    },
    {
      "name": "Print u-Shar",
      "link": "",
      "internalLink": "",
      "apis": [
        {
          "apiName": "Connect + API Order com Split + API Zero Dollar",
          "features": [
            "Split de pagamentos com PIX e Crédito",
            "Criptografia de cartão",
            "Tokenização",
            "Captura automática",
            "Webhook"
          ]
        }
      ]
    }
  ]
}

function renderIntegrationsTable(integrations) {
  const integrationsDiv = document.getElementById('integrations');
  if (integrationsDiv) {
    // Create table elements
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    // Create table header row
    const headerRow = document.createElement('tr');
    const headers = ['Plataforma', 'Documentação', 'APIs suportadas'];
    headers.forEach(headerText => {
      const th = document.createElement('th');
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    // Create table body rows
    integrations.platforms.forEach(platform => {
      const row = document.createElement('tr');
      row.setAttribute('data-name', platform.name.toLowerCase());
      // Create name cell with or without link
      const nameCell = document.createElement('td');
      if (platform.link) {
        const nameLink = document.createElement('a');
        nameLink.href = platform.link;
        nameLink.textContent = platform.name;
        nameLink.target = "_blank";
        nameCell.appendChild(nameLink);
      } else {
        nameCell.textContent = platform.name;
      }
      row.appendChild(nameCell);
      // Create documentation cell
      const docCell = document.createElement('td');
      if (platform.internalLink) {
        docCell.innerHTML = `O Pagbank disponibiliza um guia de integração para a plataforma <a href="/docs/${platform.internalLink}">${platform.name}</a>. Você também pode acessar a <a href="${platform.link}" target="_blank">página oficial da plataforma</a> para maiores informações.`;
      } else if (platform.link) {
        docCell.innerHTML = `O Pagbank não possui um guia para essa integração. Você deve acessar a <a href="${platform.link}" target="_blank">página oficial da plataforma</a> para obter essa informação.`;
      } else {
        docCell.textContent = "O Pagbank não possui um guia para essa integração.";
      }
      row.appendChild(docCell);
      // Create APIs cell
      const apisCell = document.createElement('td');
      if (platform.apis.length > 0) {
        platform.apis.forEach(api => {
          const apiName = document.createElement('strong');
          apiName.textContent = api.apiName;
          apisCell.appendChild(apiName);
          const ul = document.createElement('ul');
          api.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            ul.appendChild(li);
          });
          apisCell.appendChild(ul);
        });
      } else {
        apisCell.textContent = '';
      }
      row.appendChild(apisCell);
      tbody.appendChild(row);
    });
    // Append thead and tbody to the table
    table.appendChild(thead);
    table.appendChild(tbody);
    // Clear any existing content and append the new table
    integrationsDiv.innerHTML = '';
    integrationsDiv.appendChild(table);
  } else {
    console.error("Div with ID 'integrations' not found.");
  }
}
function filterIntegrations() {
  const searchField = document.getElementById('search-field');
  const filter = searchField.value.toLowerCase();
  const rows = document.querySelectorAll('#integrations table tbody tr');
  rows.forEach(row => {
    const name = row.getAttribute('data-name');
    if (name.includes(filter)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      renderIntegrationsTable(integrations);
      document.getElementById('search-field').addEventListener('input', filterIntegrations);
    }
  });
}, { threshold: 0.1 });

const loadTable = () => {
  const integrationsDiv = document.getElementById('search-field');
  if (!integrationsDiv) console.error("Div with ID 'integrations' not found.");
  else observer.observe(integrationsDiv)
}

loadTable();

document.addEventListener('click', () => {
  setTimeout(() => {
    loadTable();
  }, 2000)
});

document.addEventListener("DOMContentLoaded", function() {
  const htmlElement = document.documentElement;
  const englishImages = Array.from(document.getElementsByClassName("english_image"));
  const portugueseImages = Array.from(document.getElementsByClassName("portuguese_image"));

  function setDisplay(elements, displayStyle) {
    elements.forEach((element) => {
      element.style.display = displayStyle;
    });
  }

  function updateImageDisplay() {
    const language = htmlElement.getAttribute("lang");
    if (language === "en") {
      setDisplay(englishImages, "block");
      setDisplay(portugueseImages, "none");
    } else if (language === "pt-BR") {
      setDisplay(englishImages, "none");
      setDisplay(portugueseImages, "block");
    } else {
      setDisplay(englishImages, "none");
      setDisplay(portugueseImages, "none");
    }
  }

  // Initial load
  updateImageDisplay();

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'lang') {
        updateImageDisplay();
      }
    });
  });

  // Start observing the <html> element for attribute changes
  observer.observe(htmlElement, { attributes: true });

  // Expose changeLanguage function for testing purposes
  window.changeLanguage = function(language) {
    htmlElement.setAttribute("lang", language);
    console.log(`Content changed to: ${htmlElement.getAttribute("lang")}`);
  };
});