<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController
{
	/**
      * @Route("/", name="home")
      */
    public function index()
    {
        $number = random_int(0, 100);

        return new Response(
            '<html><body>Lucky number: '.$number.'</body></html>'
        );
    }

    /**
      * @Route("/{slug}", name="page")
      */
    public function page( $slug )
	{
		return new Response(
        	'<html><body>Lucky number: '.$slug.'</body></html>'
    	);	
	}
    
}	