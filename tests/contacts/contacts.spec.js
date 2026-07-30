import{test,expect} from "@playwright/test"
import login from '../../testdata/login.json'
import contacts from '../../testdata/contacts.json'
import { contactclass } from "../../pages/contacts";
import { loginclass } from './../../pages/login'; 
import { random } from "../../utils/random";

test.only("POM2", async ({page}) => {
    let sign = new loginclass(page)
    await sign.launchurl(login.url)
    await sign.details(login.username, login.password)

    let contactpage = new contactclass(page)

    let random_fun = random() 
    let name = contacts.firstname+ random_fun 
    let lastName = contacts.lastname + random_fun
    // One method call instead of ~10 lines
    let lastname = await contactpage.createContact({
        firstName:name,
        lastName: lastName,
        // filePath: 'H:/Akshatha Automation/PLAYWRIGHT/screenshot/-page-1780025643536.png'
    })

    await expect(contactpage.verifyLastname).toContainText(lastname)
}) 