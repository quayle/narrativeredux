/**
 * File: standard.js
 */
 
/**
 * Writes Default Menu
 */
function WriteStandardMenu() {
    print("<ul class='menu-list'>");
    print  ("<li class='menu-item menu-home'>");
//    theme('link', new array('value' => '', 'path' => 'index.html', 'attributes' =
    print theme_link("", './index.html', options['attributes']['title'] = Dic("AltHome"));
    print  ("</li>");
    print  ("<li class='menu-item menu-toc menu-individual-toc'>");
    print theme_link("", './individual_toc.html', options['attributes']['title'] = Dic("AltIndividuals"));
    print  ("</li>");
    print  ("<li class='menu-item menu-toc menu-family-toc'>");
    print theme_link("", './individual_toc.html', options['attributes']['title'] = Dic("AltFamilies"));
    print  ("</li>");
    print  ("<li class='menu-container'></li>");
    print("</ul>");
}

/**
 * Writes Default Footer
 */
function WriteStandardFooter() {
    print("<p><small>");
    
//    Report.WriteFormatted(Dic("FmtHtmlHomeSkin"),
//                                ReportGenerator.SoftwareVersion,
//                                Year(Date()),
//                                Month(Date()),
//                                Day(Date()),
//                                (ReportGenerator.PathSkin ? "" : Dic("Custom") + " "),
//                                ReportGenerator.SkinName,
//                                ReportGenerator.SkinVersions);
    print("</small></p>");
    print("<p><a target='_blank' href='http://www.genopro.com/'>");
    Report.WriteFormatted("<img src='./images/genopro.logo.gif' alt='{0}' title='{1}' />", Dic("AltGenoProLogo"), Dic("AltGenoProLogo"));
    print("</a></p>");
}

function WriteStandardIntro() {
  Report.WriteFormatted(Dic("FmtHtmlHomeIntro"), "TODO", (new People()).count(), (new Kin()).count());
}

var saver = Session;
