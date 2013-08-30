var count = 0;

function setAppMenuBadgeValue()
{
	count++;
	//Set the AppMenuBadgeValue for the menu item with id :: "appmenuitemid3" ,here the badge value is "3"
	kony.application.setAppMenuBadgeValue("AcmeInsuranceAppMenu","appMenuOrders","" + count + "");
kony.application.setApplicationBadgeValue("" + count + "");

}

function resetAppMenuBadgeValue() {
	kony.application.setApplicationBadgeValue("");
	kony.application.setAppMenuBadgeValue("AcmeInsuranceAppMenu","appMenuOrders","");
	count = 0;
}