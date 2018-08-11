import { VoterService } from './voter.service';
import { ISession } from './event.model';
import { of } from 'rxjs';

describe('VoterService', () => {

    let voterService: VoterService;
    let mockHttp;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
        voterService = new VoterService(mockHttp);
    });

    describe('deleteVoter', () => {
        it('should remove the voter from the list of voters', () => {
            const session = { voters: ['joe', 'john'] };

            mockHttp.delete.and.returnValue(of(false));
            voterService.deleleVoter(3, <ISession>session, 'joe');

            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('john');
        });
    });


});
