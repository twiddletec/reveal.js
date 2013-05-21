/***********************************************************************************
*	(c) Ger Versluis 2000 version 5.411 24 December 2001 (updated Jan 31st, 2003 by Dynamic Drive for Opera7)
*	For info write to menus@burmees.nl		          *
*	You may remove all comments for faster loading	          *		
***********************************************************************************/

	var NoOffFirstLineMenus=5;			// Number of first level items
	var LowBgColor='white';			// Background color when mouse is not over
	var LowSubBgColor='white';			// Background color when mouse is not over on subs
	var HighBgColor='black';			// Background color when mouse is over
	var HighSubBgColor='black';			// Background color when mouse is over on subs
	var FontLowColor='black';			// Font color when mouse is not over
	var FontSubLowColor='black';			// Font color subs when mouse is not over
	var FontHighColor='white';			// Font color when mouse is over
	var FontSubHighColor='white';			// Font color subs when mouse is over
	var BorderColor='black';			// Border color
	var BorderSubColor='black';			// Border color for subs
	var BorderWidth=1;				// Border width
	var BorderBtwnElmnts=1;			// Border between elements 1 or 0
	var FontFamily="arial,comic sans ms,technical"	// Font family menu items
	var FontSize=9;				// Font size menu items
	var FontBold=1;				// Bold menu items 1 or 0
	var FontItalic=0;				// Italic menu items 1 or 0
	var MenuTextCentered='left';			// Item text position 'left', 'center' or 'right'
	var MenuCentered='left';			// Menu horizontal position 'left', 'center' or 'right'
	var MenuVerticalCentered='top';		// Menu vertical position 'top', 'middle','bottom' or static
	var ChildOverlap=.2;				// horizontal overlap child/ parent
	var ChildVerticalOverlap=.2;			// vertical overlap child/ parent
	var StartTop=110;				// Menu offset x coordinate
	var StartLeft=200;				// Menu offset y coordinate
	var VerCorrect=0;				// Multiple frames y correction
	var HorCorrect=0;				// Multiple frames x correction
	var LeftPaddng=3;				// Left padding
	var TopPaddng=2;				// Top padding
	var FirstLineHorizontal=1;			// SET TO 1 FOR HORIZONTAL MENU, 0 FOR VERTICAL
	var MenuFramesVertical=1;			// Frames in cols or rows 1 or 0
	var DissapearDelay=1000;			// delay before menu folds in
	var TakeOverBgColor=1;			// Menu frame takes over background color subitem frame
	var FirstLineFrame='navig';			// Frame where first level appears
	var SecLineFrame='space';			// Frame where sub levels appear
	var DocTargetFrame='space';			// Frame where target documents appear
	var TargetLoc='';				// span id for relative positioning
	var HideTop=0;				// Hide first level when loading new document 1 or 0
	var MenuWrap=1;				// enables/ disables menu wrap 1 or 0
	var RightToLeft=0;				// enables/ disables right to left unfold 1 or 0
	var UnfoldsOnClick=0;			// Level 1 unfolds onclick/ onmouseover
	var WebMasterCheck=0;			// menu tree checking on or off 1 or 0
	var ShowArrow=1;				// Uses arrow gifs when 1
	var KeepHilite=1;				// Keep selected path highligthed
	var Arrws=['tri.gif',5,10,'tridown.gif',10,5,'trileft.gif',5,10];	// Arrow source, width and height

function BeforeStart(){return}
function AfterBuild(){return}
function BeforeFirstOpen(){return}
function AfterCloseAll(){return}


// Menu tree
//	MenuX=new Array(Text to show, Link, background image (optional), number of sub elements, height, width);
//	For rollover images set "Text to show" to:  "rollover:Image1.jpg:Image2.jpg"

Menu1=new Array("Home","/en.html","",0,20,138);

Menu2=new Array("About","/en_company.html","",9);
	Menu2_1=new Array("Company","/en_company.html","",0,20,150);	
	Menu2_2=new Array("Contact","/en_contact.html","",0,20,150);
	Menu2_3=new Array("News","/en_news.html","",0,20,150);
	Menu2_4=new Array("Corporate","/en_corporate.html","",0);
	Menu2_5=new Array("Careers","/en_careers.html","",0);
        Menu2_6=new Array("References","/en_references.html","",0);
        Menu2_7=new Array("Partners","/en_partners.html","",0);
        Menu2_8=new Array("Presse","/en_pressnews.html","",0);
        Menu2_9=new Array("Events","/en_events.html","",0);

Menu3=new Array("Software Quality","/en_software_quality.html","",8);
Menu3_1=new Array("Standards","/en_compliance_with_DO178-C_EN61508_EN62304_ISO26262.html","",5,20,180,"","","","","","",-1,-1,-1,"","");
	Menu3_1_1=new Array("DO-178C","/en_DO-178C.html","",0,20,80);
	Menu3_1_2=new Array("EN 50128","/en_EN_50128_Software_for_Railway_Control_and_Protection_Systems.html","",0,20,80);
	Menu3_1_3=new Array("IEC 61508","/en_en-61508.html","",0,20,80);
	Menu3_1_4=new Array("IEC 62304","/en_IEC_62304.html","",0,20,80);
	Menu3_1_5=new Array("ISO 26262","/en_ISO_26262_Road_Vehicules_Functional_Safety.html","",0,20,80);
        Menu3_2=new Array("Project and Test Management","/en_project_test_management.html","",0,20,150);
        Menu3_3=new Array("Functional Tests","/en_functional_testing.html","",0,20,150);
        Menu3_4=new Array("Static Code Analysis","/en_static_code_analysis.html","",0,20,150);
        Menu3_5=new Array("Unit Testing","/en_unit_test.html","",0,20,150);
        Menu3_6=new Array("Code Coverage","/en_code_coverage.html","",0,20,150);
        Menu3_7=new Array("Code Complexity","/en_code_complexity.html","",0,20,150);
        Menu3_8=new Array("Test Management","/en_qmetry_test_management.html","",0,20,150);


Menu4=new Array("Tools","/en_solutions_overview.html","",11);
	Menu4_1=new Array("Conformiq Tool Suite","/en_conformiq_automatic_test_generation.html","",0,20,200);
	Menu4_2=new Array("GrammaTech CodeSonar","/en_grammatech_codesonar.html","",0);
	Menu4_3=new Array("DataDrill Express","/en_datadrill.html","",0);
	Menu4_4=new Array("Elvior TestCast","/en_elvior_testcast.html","",0);
	Menu4_5=new Array("SD Flight Recorder","/en_software_diagnostics_flight_recorder.html","",0);
	Menu4_6=new Array("SD Transparency Platform","/en_software_diagnostics_transparency_platform.html","",0);
	Menu4_7=new Array("Testwell CMT++","/en_cmtx.html","",0);
	Menu4_8=new Array("Testwell CMTJava","/en_cmtx.html","",0);
	Menu4_9=new Array("Testwell CTA++","/en_ctapp.html","",0,20,100);
	Menu4_10=new Array("Testwell CTC++","/en_ctcpp.html","",0,20,100);
	Menu4_11=new Array("QMetry Test Management","/en_qmetry_test_management.html","",0,20,100);

Menu5=new Array("Services","/en_services.html","",9);
	Menu5_1=new Array("Seminars","/en_seminars.html","",0,20,180);
	Menu5_2=new Array("Consulting","/en_consulting.html","",0,20,180);
	Menu5_3=new Array("News","/en_news.html","",0,20,180);
	Menu5_4=new Array("Newsletter","/en_newsletter.html","",0);
	Menu5_5=new Array("Testing Library","/en_software_testing_papers_library.html","",0);
	Menu5_6=new Array("Professional Press","/en_pressnews.html","",0);
	Menu5_7=new Array("Evaluations","/en_evals.html","",0);
	Menu5_8=new Array("Support Center","/en_support.html","",0);
	Menu5_9=new Array("Videos","/en_online_presentations.html","",0);




