import firebase from "firebase/compat/app";

export async function addPageView() {
    // TODO: get those from variables on the page
    const clientId = "client1";
    const landingPageId = "landingPage1";

    // Reference the landing page in the database
    const landingPageRef = firebase.database().ref(`/analytics/clients/${clientId}/landingPages/${landingPageId}`);

    // Increment the view count
    landingPageRef.transaction((landingPage) => {
        if (landingPage) {
            landingPage.views = (landingPage.views || 0) + 1;
        }

        return landingPage;
    });
}
