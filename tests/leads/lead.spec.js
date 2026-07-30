import {test} from '../../fixtures/crmfixtures'

test('lead',async ({leads}) => {
    test.slow()
    await leads.det()
})