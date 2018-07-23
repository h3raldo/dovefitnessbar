<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Helper\PrismicHelper;


class DefaultController extends AbstractController
{
	/**
	 * @Route("/", name="home")
	 *
	 * @return Response
	 * @throws \Exception
	 */
    public function index()
    {
		// $helper = new PrismicHelper();
		// $page = $helper->getPageBySlug('home');

		return $this->render('page/index.html.twig', array('meta_title' => 'Test'));
    }

	/**
	 * @Route("/{slug}.html", name="page")
	 *
	 * @param $slug
	 * @return Response
	 */
    public function page( $slug )
	{
		if( $slug === 'benefits' ){
			return $this->render('page/benefits.html.twig', array('meta_title' => 'Test'));
		}

		return $this->render('page/buy.html.twig', array('meta_title' => 'Test'));
	}
    
}	