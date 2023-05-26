const playwright = require("playwright");

export const getLinkedinProfile = async (urlProfile) => {
    const browser = await playwright.chromium.launch({ headless: true });
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto(urlProfile);
    await page.waitForTimeout(1000);

    const name = await page.$eval(".top-card-layout__title", (el) => el.innerText);
    const headline = await page.$eval(".top-card-layout__headline", (el) => el.innerText);
    const experience = await page.$$eval(".experience-item", (positions) => positions.map((div) => {
        const title = div.querySelector(".profile-section-card__title");
        const company = div.querySelector(".profile-section-card__subtitle");
        const time = div.querySelector(".date-range span");
        const location = div.querySelector(".experience-item__location");
        const description = div.querySelector(".show-more-less-text")
        return {
            title: title?.innerText,
            company: company?.innerText,
            time: time?.innerText,
            location: location?.innerText,
            description: description?.innerText
        };
    }));

    // TODO  Revisar porque solo se esta cargando la primera
    const education = await page.$$eval(".education__list", (divs) => divs.map((div) => {
        const name = div.querySelector(".profile-section-card__title");
        const title = div.querySelector(".profile-section-card__subtitle");
        const duration = div.querySelector(".profile-section-card__meta");
        const location = div.querySelector(".experience-item__location");
        const activities = div.querySelector(".education__item education__item--activities-and-societies")
        return {
            name: name?.innerText,
            title: title?.innerText,
            duration: duration?.innerText,
            location: location?.innerText,
            activities: activities?.innerText
        };
    }));
    await browser.close();
    return { name, headline, experience, education }
};