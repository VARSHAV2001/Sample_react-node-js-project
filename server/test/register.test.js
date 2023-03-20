import { Registration } from '../services/Register.service';

describe('test handlers', () => {
    test('responds to/Registration/:firstname', () => {
        const req = { };
        const res = { text: ' ',
        send: (input) => {this.firstname = input }
        };
        index(req, res);

        expect(res.firstname).toEqual(User.firstname)
    });
    test('response to/Registration/:lastname', () => {
        const req = {params: {lastname: 'Bob'}};
        
    })
})