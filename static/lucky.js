/** processForm: get data from form and make AJAX call to our API. */

async function processForm(evt) {
    evt.preventDefault();
    const name = $("#name").val();
    const year = $("#year").val();
    const email = $("#email").val();
    const color = $("#color").val();
    const results = await axios.post("/api/get-lucky-num", { "name": name, "year": year, "email": email, "color": color});
    handleResponse(results)
}

/** handleResponse: deal with response from our lucky-num API. */

async function handleResponse(resp) {
    if (resp.data.errors){
        for (const error in resp.data.errors) {
            $(`#${error}-err`).text(resp.data.errors[error])
          }
        }
    else {
        console.log(resp.data.num.num)
        $('#lucky-results').text(`Your lucky number is ${resp.data.num.num} (${resp.data.num.fact}). Your birth year (${resp.data.year.year}) fact is ${resp.data.year.fact}.`)
    }
    }



$("#lucky-form").on("submit", processForm);
