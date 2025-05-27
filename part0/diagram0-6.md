sequenceDiagram
    participant browser
    participant server

        Note right of browser: User is already in Single App Version of site (what happens in this step is already explained in diagram 0-4)

        Note right of browser: User types note and clicks save
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa , (value of the new note gets sent to the server)
    activate server
    server-->>browser: HTML Response 201 Created (List of notes gets updated without needed to download html file, js file and css file all over again, this is done through the JS Script)
    deactivate server