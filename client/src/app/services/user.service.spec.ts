import { UserService } from "./user.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { User } from '../models/user.model';

describe('UserService', () => {
    let service: UserService
    let httpMock: HttpTestingController

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [UserService]
        })

        service = TestBed.get(UserService)
        httpMock = TestBed.get(HttpTestingController)
    })

    afterEach(() => {
        httpMock.verify()
    })

    it('should be created', () => {
        expect(service).toBeTruthy()
    })

    it('should get the current user', () => {
        const dummyUser: User = {
            id: '1234',
            fullName: 'John Doe',
            email: 'john.doe@gmail.com'
        }

        service.getCurrentUser().subscribe(res => {
            expect(res.id).toEqual('1234')
            expect(res.fullName).toEqual('John Doe')
            expect(res.email).toEqual('john.doe@gmail.com')
        })

        const request = httpMock.expectOne(`${service.ROOT_URL}/user/current`)

        expect(request.request.method).toBe('GET')

        request.flush(dummyUser)
    })
})