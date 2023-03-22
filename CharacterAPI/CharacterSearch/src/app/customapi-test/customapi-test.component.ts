import { HttpClient } from '@angular/common/http'
import { Component, OnInit, Inject } from '@angular/core'

@Component({
    selector: 'wa-customapi-test',
    templateUrl: './customapi-test.component.html',
    styleUrls: ['./customapi-test.component.scss'],
})
export class CustomapiTestComponent implements OnInit {

    baseUrl!: string;
    placeholder = 'placeholder'

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async ngOnInit(): Promise<void> {
        await this.getData()
    }

    getData = () => {
        this.http.get<TermTeam[]>(this.baseUrl + 'placeholder').subscribe(
            (result: any) => {
                this.placeholder = result
            },
            (error: any) => console.error(error)
        )
    }
}

interface TermTeam {
    name: string
    title: string
}
