import React from 'react'

function Form({showForm, setShowForm}) {
  return (
    <section id='form'>{showForm && (
        <div className="form-modal">
            <button className="close-modal" onClick={() => setShowForm(false)}>Close</button>
          <iframe 
            title="Enrollment Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSf0qQrP7C7uoy9o0RQfI2_55jzbNKV4Pb-jIqdGqoXAfaOzKQ/viewform?embedded=true" 
            width="100%" // Adjusted width for responsiveness
            height="500" 
            frameborder="0" 
            marginheight="0" 
            marginwidth="0"
          >
            Loading…
          </iframe>
          <button className="close-modal" onClick={() => setShowForm(false)}>Close</button>
        </div>
      )}</section>
  )
}

export default Form