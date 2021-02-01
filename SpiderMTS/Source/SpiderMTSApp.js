/**
Constructor
*/
class SpiderMTSApp extends AApplication
{
	constructor()
	{
		super()

		//TODO:edit here

	}

	onReady()
	{
		super.onReady();

		var navi = new ANavigator('main');
		
		navi.registerPage('Source/LoginView.lay', 'LoginView');
		navi.registerPage('Source/MainView.lay', 'MainView');
		
		navi.goPage('LoginView');
	}

	unitTest(unitUrl)
	{
		//TODO:edit here

		this.onReady();

		super.unitTest(unitUrl);
	}

}

window["SpiderMTSApp"] = SpiderMTSApp