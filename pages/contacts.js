import { window } from "../utils/windowHandling";
import { dropdown } from "../utils/dropdown";

export class contactclass{
    constructor(page){
        this.page=page;
        this.contactButton=page.getByRole("link",{name:"Contacts"})
        this.createcontactimg=page.getByAltText('Create Contact...')
        this.salutationtype=page.locator('//select[@name="salutationtype"]')
        this.firstname=page.locator('//input[@name="firstname"]')
        this.lastName=page.locator('//input[@name="lastname"]')
        this.handlewindow=page.locator('(//img[@alt="Select"])[1]')
        this.birtdaycalander=page.locator('//img[@id="jscal_trigger_birthday"]')
        this.todaydate=page.getByText('Today', { exact: true })
        const today = new Date()
        const todayDay = today.getDate()
        this.currentdate=page.getByRole("cell", { name: String(todayDay), exact: true })
        this.choosefiles=page.getByRole('button',{name:'Choose File'})
        this.save=page.getByRole("button",{name:"Save"}).first()
        this.verifyLastname=page.locator('//span[@id="dtlview_Last Name"]')
        this.hover=page.locator('//img[@src="themes/softed/images/user.PNG"]')
        this.signout=page.locator('//a[text()="Sign Out"]')

    }
    

 // ONE method — the entire create-contact flow, top to bottom, in real order
    async createContact({ salutation, firstName, lastName, filePath }) {
        // Open the form
        await this.contactButton.click()
        await this.createcontactimg.click()
 
        // Fill basic details
        // await this.salutationtype.selectOption({ value: salutation })

        await dropdown(this.salutationtype,{value:'Mr.'})
        await this.firstname.fill(firstName)
        await this.lastName.fill(lastName)
        const savedLastName = await this.lastName.inputValue()
 
        // Handle "Select" popup window
        // let [popup] = await Promise.all([
        //     this.page.waitForEvent('popup'),
        //     this.handlewindow.click()
        // ])

        let popup = await window(this.page,this.handlewindow.click())
        await popup.locator('//a[@id="3"]').click()
        await this.page.bringToFront()
 
        // Calendar - select today's birthday
        await this.birtdaycalander.click()
        await this.todaydate.click()
 
        // Upload file
        // await this.choosefiles.setInputFiles(filePath)
 
        // Save
        await this.save.click()
    }
}