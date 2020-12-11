
function ContactCard(props) {


    function removeContact() {

        props.removeContact(props.id)
    }

    return (
        
        <>
            <tr>

                <td>{props.name}</td>
                <td>{props.popularity}</td>
                <td><img style={{ width: '100px' }} src={props.pictureUrl} /></td>
                <td><button onClick={removeContact}>Delete</button></td>

            </tr>
            
        </>
    )
}

export default ContactCard