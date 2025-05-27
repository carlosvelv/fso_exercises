sequenceDiagram
    participant browser
    participant server

        Note right of browser: User goes to Single App Version of site
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML Response 200 OK (Sends HTML file)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: HTML Response 200 OK (sends the CSS file)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: HTML Response 200 OK (sends the JavaScript file and the browser executes Javascript code)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: HTML Response 200 OK (sends the json file which include all of the notes)
    deactivate server

    Note right of browser: User types note and clicks save

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: HTML Response 201 Created (List of notes gets updated)
    deactivate server