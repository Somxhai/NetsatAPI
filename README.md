
# NetsatAPI


## API Reference

https://netsat-api.vercel.app/

### Netsat score

#### Get all data
`GET /`

    {
	"syllabusCount": 169,
	"facultyCount": 23,
	"dataDate": "16-11-2564",
	"netsat_data": [
		{
			"syllabus": "คณิตศาสตร์",
            "syllabus_id": 0,
			...
		},
		{
			"syllabus": "เคมี",
			"syllabus_id": 1,
			...
		}
#### Get details
`GET /details`


    {
        "syllabusCount": 169,
	    "facultyCount": 23,
	    "dataDate": "16-11-2564",
    }

#### Get a specific thing
`GET /:id`

`GET https://netsat-api.vercel.app/23`

    {
	"syllabus": "วิศวกรรมเคมี หลักสูตรนานาชาติ",
	"faculty": "คณะวิศวกรรมศาสตร์",
	"syllabus_id": 23,
	...
	}

### English test score

`GET /netsat/engtest`
	
	
	{
	  "engineer": {
		  "TOEFL PB": 494,
		  "TOEFL CB": 167,
		  ...
	},
	  "pharmarcy": {
		  "TOEFL PB": 470,
		  "TOEFL CB": 150,
		  ...
	  }
	}
	






