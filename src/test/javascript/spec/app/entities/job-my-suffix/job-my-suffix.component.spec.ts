/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';

import { App3TestModule } from '../../../test.module';
import { JobMySuffixComponent } from '../../../../../../main/webapp/app/entities/job-my-suffix/job-my-suffix.component';
import { JobMySuffixService } from '../../../../../../main/webapp/app/entities/job-my-suffix/job-my-suffix.service';
import { JobMySuffix } from '../../../../../../main/webapp/app/entities/job-my-suffix/job-my-suffix.model';

describe('Component Tests', () => {

    describe('JobMySuffix Management Component', () => {
        let comp: JobMySuffixComponent;
        let fixture: ComponentFixture<JobMySuffixComponent>;
        let service: JobMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [App3TestModule],
                declarations: [JobMySuffixComponent],
                providers: [
                    JobMySuffixService
                ]
            })
            .overrideTemplate(JobMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(JobMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(JobMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of({
                    json: [new JobMySuffix(123)],
                    headers
                }));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.jobs[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
