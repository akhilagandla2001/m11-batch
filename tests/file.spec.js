import {test} from '@playwright/test'

test('',async ({page}) => {
    test.slow()
    await page.goto('http://localhost:8888/')
    await page.locator('//input[@name="user_name"]').fill('admin')
    await page.locator('//input[@name="user_password"]').fill('admin')
    await page.getByRole('button',{name:'Login'}).click()

    await page.getByRole('link',{name:'CONTACTS'}).click()
    await page.getByRole('img',{name:'Create Contact...'}).click()
    await page.locator('#jscal_trigger_birthday').click()
    // await page.getByRole('cell',{name:'23'}).click()

    // let date = 16;
    // let month = "august"
    let today = new Date();
    let date1 = today.getDate()
    let month1 = today.toLocaleString('en-US',{month:'long'});
    let year = today.getFullYear();

    await page.locator(`//td[text()="${month1}, ${year}"]/ancestor::table//td[text()=${date1}]`).click()
})

