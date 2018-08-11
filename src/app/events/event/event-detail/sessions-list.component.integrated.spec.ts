import { DurationPipe } from './../../shared/duration.pipe';
import { SessionsListComponent } from './sessions-list.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { VoterService } from '../../shared/voter.service';
import { AuthService } from '../../../user/auth.service';
import { UpvoteComponent } from '../../shared';
import { CollapseWellComponent } from '../../../common';

describe('SessionListComponent', () => {

    let fixture: ComponentFixture<SessionsListComponent>;
    let component: SessionsListComponent;
    let element: HTMLElement,
        debugEl: DebugElement;

    beforeEach(async () => {
        const mockAuthService = {
            isAuthenticated: () => true,
            currentUser: { userName: 'Joe' },
        };
        const mockVoterService = {
            userHasVoted: () => true,
        };

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionsListComponent,
                UpvoteComponent,
                DurationPipe,
                CollapseWellComponent,
            ],
            providers: [
                {
                    provide: AuthService,
                    useValue: mockAuthService
                },
                {
                    provide: VoterService,
                    useValue: mockVoterService,
                }
            ],
            schemas: [],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionsListComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;
    });

    describe('initial display', () => {

        it('should have the correct session title', () => {
            component.sessions = [
                {
                    id: 3, name: 'Session 1',
                    presenter: 'Joe', duration: 1,
                    level: 'beginner', abstract: 'abstract',
                    voters: ['john', 'bob']
                },
            ];
            component.sortBy = 'name';
            component.filterBy = 'all';
            component.eventId = 4;

            component.ngOnChanges();
            fixture.detectChanges();

            expect(element.querySelector('[well-title]').textContent)
                .toContain('Session 1');
        });

    });

});

