<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use Illuminate\Http\Request;


class ShopController extends Controller
{


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return Shop::all();

        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        return Shop::find($id);
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        
        $shop=Shop::find($id);

        if($request->hasFile('imgupload')){
           
            $imageName = time().'.'.$request->imgupload->extension();  
            $request->imgupload->move(public_path('images'), $imageName);
            $shop->image=$imageName;
            $shop->save();
            return "Image Saved Successfully";
        }
         else{
             $shop->update($request->all());
             return $shop;
         }
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Shop::destroy($id);
        //
    }
    
}
