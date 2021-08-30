
/**
Constructor
*/
class MainView extends AView
{
	constructor()
	{
		super()

		//TODO:edit here

	}

	init(context, evtListener)
	{
		super.init(context, evtListener)

		//TODO:edit here

	}

	onInitDone()
	{
		super.onInitDone()
		
		
		//url 대신 null 을 셋팅하면 빈 컨테이너가 뷰내부에 생성된다. 컨테이너 아이디는 생략 가능
		var cntr = this.naviView.loadContainer( null, 'naviView_cntr');

		//두번째 파라미터에 컨테이너를 셋팅하면 지정한 컨테이너의 내부에서 네비게이터가 작동된다.
		var navi = new ANavigator('sub_navi', cntr);

		navi.registerPage('Source/main/Page0001.lay', 'Page0001');
		//navi.registerPage('Source/main/Page0001.lay', 'Page0002');
		//navi.registerPage('Source/main/Page0001.lay', 'Page0003');

		navi.goPage('Page0001');		

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}

}

window["MainView"] = MainView