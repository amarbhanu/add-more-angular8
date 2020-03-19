import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, FormControl } from "@angular/forms";
import { Product, SellingPoint } from "../product";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"]
})
export class ProductFormComponent implements OnInit {
  batchPlanningForm: FormGroup;
  lecher_type: FormArray;
  subject: FormArray;
  teacher: FormArray;
  start_time: FormArray;
  end_time: FormArray;
  length_arr: any = [];
  end_time_set: any;
  num = 0;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.getFromSet();
  }

  getFromSet() {
    this.lecher_type = new FormArray([]);
    this.subject = new FormArray([]);
    this.teacher = new FormArray([]);
    this.start_time = new FormArray([]);
    this.end_time = new FormArray([]);
    this.length_arr.push(this.num);

    this.lecher_type.push(new FormControl(""));
    this.subject.push(new FormControl(""));
    this.start_time.push(new FormControl(""));
    this.end_time.push(new FormControl(""));
    this.teacher.push(new FormControl(""));

    this.batchPlanningForm = new FormGroup({
      lecher_type: this.lecher_type,
      subject: this.subject,
      teacher: this.teacher,
      start_time: this.start_time,
      end_time: this.end_time
    });
  }

  onSubmitDetail(value) {
    console.log(JSON.stringify(value));
  }

  get sellingPoints() {
    return this.batchPlanningForm.get("batchPlanningPimetable") as FormArray;
  }

  /////// This is new /////////////////

  addSellingPoint() {
    this.lecher_type.push(new FormControl(""));
    this.subject.push(new FormControl(""));
    this.start_time.push(new FormControl(""));
    this.end_time.push(new FormControl(""));
    this.teacher.push(new FormControl(""));
    this.length_arr.push(this.num);
  }

  deleteSellingPoint() {
    this.lecher_type.removeAt(this.length_arr.length - 1);
    this.subject.removeAt(this.length_arr.length - 1);
    this.start_time.removeAt(this.length_arr.length - 1);
    this.end_time.removeAt(this.length_arr.length - 1);
    this.teacher.removeAt(this.length_arr.length - 1);
    this.length_arr.pop(this.num);
  }

  // constructor(private fb: FormBuilder) {}
  //productForm: FormGroup;

  // ngOnInit() {
  /* Initiate the form structure *
    this.productForm = this.fb.group({
      title: [],
      selling_points: this.fb.array([
        this.fb.group({ point: "" }, { subject: "" })
      ])
    });
    /****************** */
  // }

  ///////// This is new ////////
  /**************** *
  get sellingPoints() {
    return this.productForm.get("selling_points") as FormArray;
  }

  /******************** */
  ///////////End ////////////////

  /////// This is new /////////////////

  /*************** *

  addSellingPoint() {
    this.sellingPoints.push(this.fb.group({ point: "" }, { subject: "" }));
  }

  deleteSellingPoint(index) {
    this.sellingPoints.removeAt(index);
  }
  /*************** */

  //////////// End ////////////////////
}
