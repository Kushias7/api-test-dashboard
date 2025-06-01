*** Settings ***
Library    RequestsLibrary
Library    Collections

*** Test Cases ***
Test API Health
    [Documentation]    Check if the API is healthy
    Create Session    api    http://localhost:5000
    ${resp}=    Get Request    api    /test_results
    Should Be Equal As Strings    ${resp.status_code}    200
    Dictionary Should Contain Key    ${resp.json()}    pass

