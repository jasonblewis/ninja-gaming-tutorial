export async function GET() {
    // connect to db and get data

    const guides = [
        {id: 1, title: 'some title 1'},
        {id: 2, title: 'some title 2'},
        {id: 3, title: 'some title 3'},
        {id: 4, title: 'some title 4'},
        {id: 5, title: 'some title 5'},
        {id: 6, title: 'some title 6'},
    ]
     return {
        statis: 200,
        body: {guides}
     }
}