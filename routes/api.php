<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ShopController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);

Route::get('/shops', [ShopController::class, 'index']);
// Route::get('/shop/{id}',[ShopController::class,'show']);

Route::group(['middleware'=>['auth:sanctum']], function () {
    Route::get('/shop/{id}', [ShopController::class, 'show']);
    Route::put('/shop/{id}', [ShopController::class, 'update']);
    Route::post('/shop/{id}', [ShopController::class, 'update']);
    Route::delete('/shop/{id}', [ShopController::class, 'destroy']);
    Route::post('/logout',[AuthController::class,'logout']);
});



// Route::post('/')
