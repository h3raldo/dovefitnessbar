<?php

namespace App\Helper;

use Prismic\Api;
use Prismic\Dom\RichText;
use Prismic\Dom\Link;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class PrismicHelper
{
	private $url = 'https://dovefitnessbar.prismic.io/api/v2';
	private $token = 'MC5XejdwdWg0QUFLVkJlZ1Zs.Qu-_vSFu77-977-977-977-977-977-9Nu-_vTQf77-977-977-977-9DC8O77-9Ru-_vWbvv73vv73vv73vv73vv73vv71U';

	public $api;
	public $linkResolver;

	public function __construct()
	{
		if ($this->api == null) {
			$this->api = Api::get($this->url, $this->token);
		}
		if( $this->linkResolver == null ){
			$this->linkResolver = new PrismicLinkResolver();
		}

		return $this->api;
	}

	public function getPageBySlug( $slug )
	{
		$page = $this->api->getByUID('page',$slug );

		if( is_null($page) ){
			$this->pageNotFound();
		}

		$fields = $this->convertFields( $page );

		// var_dump($fields);

		return $fields;
	}

	public function convertFields( $page )
	{
		$fields = array();

		foreach( $page->data as $key => $field ){

			// richtext
			if( is_array($field) ){
				$fields[$key] = RichText::asHtml($field, $this->linkResolver );
				continue;
			}

			// links
			if( is_object($field) && $field->link_type === 'Web' )
			{
				$fields[$key] = Link::asUrl($field, $this->linkResolver);
				continue;
			}

			// normal strings
			$fields[$key] = $field;
		}

		return json_decode(json_encode($fields), true);
	}

	public function pageNotFound()
	{
		throw new NotFoundHttpException('The page does not exist');
	}
}