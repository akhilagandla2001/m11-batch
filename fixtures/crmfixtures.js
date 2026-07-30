import {test as base} from './login'
import { leadsclass } from '../pages/leads'
import { contactclass } from '../pages/contacts'

export let test = base.extend({
    leads :async ({login},use) => {
        let lead = new leadsclass(login)
        await use(lead)
    },
    contacts : async ({login},use) => {
        let contact = new contactclass(login)
        await use(contact)
    }
})