<?php

namespace App\Http\Controllers;
use App\Demande;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;


class DemandesController extends Controller
{
   
    /**
    * Display a listing of the resource.
    *
    * @return Response
    */
    public function index() {
       
            return Demande::all();
    
    }
   
     /**
    * Display the specified resource.
    *
    * @param  int  $id
    * @return Response
    */
    public function show($id) {
        return Demande::find($id);
    }
    
    
   
    public function delete(Request $request ,$id) {
       
         
         $demande= Demande::findOrFail($id);
         $demande->delete();

            return 204;
      
      }
    
}



    
   
   

   

