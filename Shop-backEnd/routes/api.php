<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Clothe;
use App\Models\Category;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
// Route::get('/categories', 'ApiCategoriesController@index');

// Route per Home Page restituisce tutti i prodotti
Route::get('/home', function (Clothe $clothe) {
    $data = [
        'dress' => Clothe::all(),
        // 'category_dress' => Clothe::all()->category
    ];
    return response()->json($data);
});
// Route per che restituisce Dettaglio Prodotto prodotto
Route::get('/home/dress/{id}', function (Clothe $clothe, $id) {
    $data = [
        'dress_user' => Clothe::find($id),
        'category_dress' => Clothe::find($id)->category
    ];
    return response()->json($data);
});
