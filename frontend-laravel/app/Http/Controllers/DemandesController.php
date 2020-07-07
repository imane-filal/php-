<?php

namespace App\Http\Controllers;
use App\Demande;
use Illuminate\Http\Request;

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
    
    
   
    public function store(Request $request){
        return Demande::create($request->all());
    }
}



    
   
   

   

