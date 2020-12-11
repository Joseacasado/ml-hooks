import { useState, useEffect } from 'react'
import allContacts from '../../contacts.json'
import ContactCard from '../contactCard/ContactCard'

function ContactList() {

    const [contacts, setContacts] = useState(allContacts.slice(0, 5))
    

    useEffect(() => document.title = `Hay ${contacts.length} contactos`)
    
   function addRandom() {

        const randomIdx = Math.floor(Math.random() * ((allContacts.length - 1) - contacts.length + 1) + contacts.length) 
        const selected = allContacts[randomIdx]

        if (contacts.includes(selected)) {
            addRandom()
        } else {
            setContacts([...contacts, selected])
        }
    }

    function sortName() {

        
        const named = contacts.sort((a, b) => a.name.localeCompare(b.name))
        setContacts([...named])

        console.log(contacts)
    }

    function sortPopular() {

        const copy = [...contacts]

        setContacts(copy.sort((a,b) => b.popularity - a.popularity))
    }

    function deleteContact(contactId) {

        const filtered = contacts.filter(elm => elm.id !== contactId)

        setContacts([...filtered])
    }


    return (
        
        <>

            <h1>IronContacts</h1>

            <button onClick={addRandom}>Add random contact</button>
            <button onClick={sortName}>Sort by name</button>
            <button onClick={sortPopular}>Sort by popularity</button>



            <table>
                
                <thead>

                    <tr>

                        <td>Name</td>
                        <td>Popularity</td>
                        <td>Image</td>

                    </tr>

                </thead>

                <tbody>

                    {contacts.map(elm => <ContactCard key={elm.id} {...elm} removeContact={ deleteContact}/>)}

                </tbody>

           </table> 
        </>
    )
}

export default ContactList































