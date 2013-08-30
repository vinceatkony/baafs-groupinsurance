function performXMLServiceCallToFetchPolicies()
{	
	try
	{
		var serviceInputParameters = {appID:"AcmeInsurance", serviceID:"GetPolicy"}
		appmiddlewareinvokerasync(serviceInputParameters, processResponseFromGetPolicy);
	}
	catch (err)
	{
		alert("Error"+err);
	}

}

function processResponseFromGetPolicy (status, responseFromGetPolicy)
{

	if(null != status && status == 400)
 	{
		if(null != responseFromGetPolicy && null != responseFromGetPolicy["opstatus"] && 0 == responseFromGetPolicy["opstatus"])
	  	{

			var policies = responseFromGetPolicy.policyList;
			if ("" != policies && policies != null) 
			{
				var policyList = [];
				for (var policy in policies)
	 			{
	 				var miles = "";
	 				var style = "";
	 				if (policies[policy]["vehicleName"] == "Nissan Altima"){
	 					miles = "185.0";
	 					style = "Aggressive +";
	 				} else {
	 					miles = "76.0";
	 					style = "Aggressive";			
	 				}
					var policyData = { lblAuto:policies[policy]["vehicleName"],lblMiles:miles,lblStyle:style }
					
					//var catData = { lblCategory:"Hello there" }
					policyList.push(policyData);
				}
		
				frmUsage.segPolicies.setData(policyList);
				frmUsage.show();
				//categoryStack.push(categoriesList); 
			}
			else
			{

				return;
			}
	  	}
		else
		{
			return;
		}
	  	
  	}
}