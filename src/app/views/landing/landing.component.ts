import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GeoLocationFormModel } from 'src/app/models/forms.model';
import { GeoCodeLocation } from 'src/app/models/geo-code.model';
import { PageTypes } from 'src/app/models/pageTypes.model';
import { States } from 'src/app/models/states.model';
import {
  LocationType,
  UnitTypes,
  UnitsTOGeoUnits,
} from 'src/app/models/types.model';
import { RoutingService } from 'src/app/services/routing/routing.service';
import { WeatherForecastStoreService } from 'src/app/state/weather-forecast-store.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  get LocationType() {
    return LocationType;
  }

  disableGetForecast = true;
  geoLocation: GeoCodeLocation = {
    city: '',
    state: '',
    postalCode: null,
  };
  landingPageForm!: FormGroup<GeoLocationFormModel>;
  locationType = LocationType['City & State'];
  statesList = States;
  unitTypes = UnitTypes;

  constructor(
    private routingService: RoutingService,
    private weatherForecastStoreService: WeatherForecastStoreService
  ) {
    this.landingPageForm = new FormGroup<GeoLocationFormModel>({
      locationType: new FormControl(LocationType['City & State'], {
        nonNullable: true,
      }),
      city: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
      units: new FormControl(UnitTypes.F, { nonNullable: true }),
      zipCode: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  ngOnInit(): void {
    this.landingPageForm.controls.locationType?.valueChanges.subscribe(
      (value) => {
        this.locationType = value;
      }
    );
  }

  //use this later for mobile viewing
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    console.log(window.innerWidth);
  }

  checkValid() {
    if (
      this.landingPageForm.get('locationType')?.value ===
        LocationType['City & State'] &&
      this.landingPageForm.get('city')?.valid &&
      this.landingPageForm.get('state')?.valid
    ) {
      return false;
    }
    if (
      this.landingPageForm.get('locationType')?.value ===
        LocationType['Zip Code'] &&
      this.landingPageForm.get('zipCode')?.valid
    ) {
      return false;
    } else {
      return true;
    }
  }

  getLatAndLong() {
    const unitTypes =
      this.landingPageForm.controls.units?.value === UnitTypes.F
        ? UnitsTOGeoUnits['F - Fahrenheit']
        : UnitsTOGeoUnits['C - Celsius'];

    this.geoLocation = {
      city: this.landingPageForm.controls.city?.value,
      state: this.landingPageForm.controls.state?.value,
      postalCode: this.landingPageForm.controls.zipCode?.value,
    };
    this.weatherForecastStoreService.getLatAndLong(this.geoLocation, unitTypes);
    this.routingService.navigateRoutes(PageTypes.FORECAST);
  }
}
