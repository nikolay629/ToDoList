import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl="http://localhost:62618/api";

  constructor(private http: HttpClient) { }

  getCompanyList(): Observable<any[]> {
    return  this.http.get<any>(this.APIUrl+"/Company");
  }
  
  getCompanyName(): Observable<any>{
   return this.http.get<any>(this.APIUrl + "/Company/GetName");
  }

  getCompanyAccountById(id: any): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + "/Company/GetCompanyAccount?id=" + id);
  }


  getCompanyAccount(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + "/Company/GetCompanyAccount");
  }

  addCompany(value: any){
    return this.http.post(this.APIUrl+"/Company", value);
  }

  editCompany(value: any){
    return this.http.put(this.APIUrl+"/Company", value);
  }

  deleteCompany(value: any){
    return this.http.delete(this.APIUrl + "/Company/"+ value);
  }

  getClientList(): Observable<any[]> {
    return  this.http.get<any>(this.APIUrl+"/Client");
  }

  getClientAccountById(id: any): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + "/Client/GetClientAccount?id=" + id);
  }

  getClientAccount(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + "/Client/GetClientAccount");
  }

  addClient(value: any){
    return this.http.post(this.APIUrl+"/Client", value);
  }

  editClient(value: any){
    return this.http.put(this.APIUrl+"/Client", value);
  }

  deleteClient(value: any){
    return this.http.delete(this.APIUrl + "/Client/"+ value);
  }

  getAdList(): Observable<any[]> {
    return  this.http.get<any>(this.APIUrl+"/Ad");
  }

  getAdById(colum: string, id: number): Observable<any[]> {
    return  this.http.get<any>(this.APIUrl+"/Ad?colum=" + colum +"&id=" + id);
  }

  addAd(value: any){
    return this.http.post(this.APIUrl+"/Ad", value);
  }

  editAd(value: any){
    return this.http.put(this.APIUrl+"/Ad", value);
  }

  deleteAd(value: any){
    return this.http.delete(this.APIUrl + "/Ad/" + value);
  }

  getApplyAdList(): Observable<any[]> {
    return  this.http.get<any>(this.APIUrl+"/ApplyAd");
  }

  getApplyAdClientId(value: any): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + "/ApplyAd/GetWithClientId?id=" + value);
  }

  getApplyAdCompanyId(value: any): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + "/ApplyAd/GetWithCompanyId?id=" + value);
  }

  addApplyAd(value: any){
    return this.http.post(this.APIUrl+"/ApplyAd", value);
  }

  editApplyAd(value: any){
    return this.http.put(this.APIUrl+"/ApplyAd", value);
  }

  deleteApplyAd(colum: any,id: any){
    return this.http.delete(this.APIUrl + "/ApplyAd?colum="+ colum +"&id="+ id);
  }

  getApproveAdList(): Observable<any[]> {
    return  this.http.get<any>(this.APIUrl+"/ApproveAd");
  }

  getApproveAdWithCompanyId(id: number): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + "/ApproveAd/GetWithCompanyId?id=" + id);
  }

  getApproveAdWithClientId(id: number): Observable<any[]> {
    return this.http.get<any>(this.APIUrl+"/ApproveAd/GetWithClientId?id=" + id);
  }

  addApproveAd(value: any){
    return this.http.post(this.APIUrl+"/ApproveAd", value);
  }

  editApproveAd(value: any){
    return this.http.put(this.APIUrl+"/ApproveAd", value);
  }

  deleteApproveAd(colum: string, id: any){
    return this.http.delete(this.APIUrl + "/ApproveAd?colum="+ colum + "&id="+ id);
  }

  getLikeAdList(): Observable<any[]> {
    return  this.http.get<any>(this.APIUrl+"/LikeAd");
  }

  getLikeAdById(colum: string, id: number): Observable<any[]> {
    return  this.http.get<any>(this.APIUrl+"/LikeAd?colum=" + colum +"&id=" + id);
  }

  addLikeAd(value: any){
    return this.http.post(this.APIUrl+"/LikeAd", value);
  }

  editLikeAd(value: any){
    return this.http.put(this.APIUrl+"/LikeAd", value);
  }

  deleteLikeAd(colum: string, id: number){
    return this.http.delete(this.APIUrl + "/LikeAd?colum="+ colum + "&id="+ id);
  }

}
