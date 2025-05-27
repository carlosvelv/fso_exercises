sequenceDiagram
    participant browser
    participant server

        Note right of browser: User types the note and clicks Save
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: HTML Response 302 FOUND (Browser access location included in headers, which in this case reloads /exampleapp/notes)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML Response 200 OK (sends the HTML file)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: HTML Response 200 OK (sends the CSS file)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: HTML Response 200 OK (sends the JavaScript file and the browser executes Javascript code)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: HTML Response 200 OK (sends the json file which include all of the notes)
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes (the callback function is in the js code)
