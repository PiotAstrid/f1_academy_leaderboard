import { AbstractControl, ValidationErrors } from "@angular/forms";
import { getCountryCode } from "countries-list";

export function validCountryValidator(control: AbstractControl): ValidationErrors | null {
    const country = control.value;
    const code = getCountryCode(country);
    return code ? null : {invalidCountry : true};
}