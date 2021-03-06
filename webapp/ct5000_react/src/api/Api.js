const baseurl = 'http://127.0.0.1:8000/';

export const login = async (username, password) => {
    let data = {
        username,
        password
    }

    const formBody = JSON.stringify(data)

    let response = await fetch(
        baseurl + 'api/token/',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: formBody
        }
    )
    return await response
}

export const refresh = async () => {

    const formBody = JSON.stringify({ "refresh": localStorage.getItem('refresh') })

    let response = await fetch(
        baseurl + 'api/token/refresh/',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: formBody
        }
    )
    return await response.json()
}

export const current_user = async () => {
    let response = await fetch(
        baseurl + 'users/current/',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('access'),
            }
        }
    )
    return await response.json()
}

export const get_parents = async () => {
    let response = await fetch(
        baseurl + 'parents/',
        {
            method: 'GET',
            
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('access'),
            }
        }
    )
    return await response.json()
}

export const get_parent = async (parent_id) => {
    let response = await fetch(
        baseurl + 'parents/' + parent_id,
        {
            method: 'GET',
            
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('access'),
            }
        }
    )
    return await response.json()
}

export const get_students_by_parent = async (parent_id) => {
    let response = await fetch(
        baseurl + 'parents/' + parent_id + '/students/',
        {
            method: 'GET',
            
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('access'),
            }
        }
    )
    return await response.json()
}

export const get_students_by_current_parent = async () => {
    let response = await fetch(
        baseurl + 'parents/students/',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('access'),
            }
        }
    )
    return await response.json()
}

export const get_student_events_by_current_parent = async () => {
    let response = await fetch(
        baseurl + 'parents/students/events/',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('access'),
            }
        }
    )
    return await response.json()
}

export const get_admins = async () => {
    let response = await fetch(
        baseurl + 'users/admins/',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('access'),
            }
        }
    )
    return await response.json()
}
export const get_admin = async (admin_id) => {
    let response = await fetch(
        baseurl + 'admins/' + admin_id,
        {
            method: 'GET',
            
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('access'),
            }
        }
    )
    return await response.json()
}
export const get_students = async () => {
    let response = await fetch(
        baseurl +'students/',
        {
            method: 'GET',
            
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('access'),
            }
        }
    )
    return await response.json()
}
export const get_student = async (student_id) => {
    let response = await fetch(
        baseurl + 'students/' + student_id,
        {
            method: 'GET',
            
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('access'),
            }
        }
    )
    return await response.json()
}
export const get_events_by_student = async (student_id) => {
    let response = await fetch(
        baseurl + 'students/' + student_id + '/events/',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('access'),
            }
        }
    )
    return await response.json()
}
export const get_events = async () => {
    let response = await fetch(
        baseurl + 'events/',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('access'),
            }
        }
    )
    return await response.json()
}
export const get_event = async (event_id) => {
    let response = await fetch(
        baseurl + 'events/' + event_id,
        {
            method: 'GET',
            
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('access'),
            }
        }
    )
    return await response.json()
}
export const get_devices = async () => {
    let response = await fetch(
        baseurl + 'devices/',
        {
            method: 'GET',
            
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('access'),
            }
        }
    )
    return await response.json()
}
export const get_device = async (device_id) => {
    let response = await fetch(
        baseurl + 'devices/' + device_id,
        {
            method: 'GET',
            
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('access'),
            }
        }
    )
    return await response.json()
}
export const get_buses = async () => {
    let response = await fetch(
        baseurl + 'buses/',
        {
            method: 'GET',
            
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('access'),
            }
        }
    )
    return await response.json()
}
export const get_bus = async (bus_id) => {
    let response = await fetch(
        baseurl + 'buses/' + bus_id,
        {
            method: 'GET',
            
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': 'JWT ' + localStorage.getItem('access'),
            }
        }
    )
    return await response.json()
}
export const get_schools = async () => {
    let response = await fetch(
        baseurl + 'schools/',
        {
            method: 'GET',
            
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('access'),
            }
        }
    )
    return await response.json()
}
export const get_school = async (school_id) => {
    let response = await fetch(
        baseurl + 'schools/' + school_id,
        {
            method: 'GET',
            
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('access'),
            }
        }
    )
    return await response.json()
}
export const get_drivers = async () => {
    let response = await fetch(
        baseurl + 'drivers/',
        {
            method: 'GET',
            
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('access'),
            }
        }
    )
    return await response.json()
}
export const get_driver = async (driver_id) => {
    let response = await fetch(
        baseurl + 'drivers/' + driver_id,
        {
            method: 'GET',
            
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('access'),
            }
        }
    )
    return await response.json()
}

/// CREATE Requests
export const add_parent = async (username, password, first_name, last_name, email, parent) => {
    // note: parent: { phone_number, address, city, state, zipcode}
    let data = {
        username, 
        password,
        first_name, 
        last_name, 
        email, 
        parent,
    }
    const formBody = JSON.stringify(data);

    let response = await fetch(
		baseurl + 'parents/',
		{
		    method: 'POST',
		    headers: {
                'Content-Type': 'application/json',
		    },
            body: formBody,
		}
    )
    return await response
}
export const add_admin = async (username, first_name, last_name, email, password) => {
    let data = {
        username,
        password,
        first_name,
        last_name,
        email,
    }

    const formBody = JSON.stringify(data);

    let response = await fetch(
		baseurl + 'admins/',
		{
		    method: 'POST',
		    headers: {
                //'Accept': 'application/json',
                'Content-Type': 'application/json',
                //'Authorization': 'JWT ' + localStorage.getItem('access'),
		    },
            body: formBody,
		}
    )
    return await response
}
export const add_student = async (first_name, last_name, age, grade, school, bus, picture, parent_one, parent_two, track) => {
    const data = new FormData();
    data.append('first_name',first_name);
    data.append('last_name',last_name);
    data.append('age',age);
    data.append('grade',grade);
    data.append('school_id',school);
    data.append('bus_id',bus);
    data.append('picture',picture);
    data.append('parent_one_id',parent_one);
    data.append('parent_two_id',parent_two);
    data.append('track',track);

    let response = await fetch(
		baseurl + 'students/',
		{
		    method: 'POST',
		    headers: {
                //'Accept': 'application/json',
                //'Content-Type': 'application/json',
                //'Authorization': 'JWT ' + localStorage.getItem('access'),
		    },
            body: data,
		}
    )
    return await response
}

export const add_event = async (enter, picture, device, student) => {
    const data = new FormData();
    data.append('enter',enter);
    data.append('picture',picture);
    data.append('device_id',device);
    data.append('student_id',student);
    
    let response = await fetch(
		baseurl + 'events/',
		{
		    method: 'POST',
		    headers: {
                //'Accept': 'application/json',
                //'Content-Type': 'application/json',
                //'Authorization': 'JWT ' + localStorage.getItem('access'),
		    },
            body: data,
		}
    )
    return await response
}

export const add_devices = async (username, password, is_device, device) => {
    const data = {
        username,
        password,
        is_device,
        device,
    }

    const formBody = JSON.stringify(data);

    let response = await fetch(
		baseurl + 'devices/',
		{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
		    body: formBody
		}
	)
    return await response
}
export const add_bus = async (name) => {
    let data = {
        name
    }

    const formBody = JSON.stringify(data)

    let response = await fetch(
		baseurl + 'buses/',
		{
		    method: 'POST',
		    headers: {
		        'Content-Type': 'application/json',
		    },
		    body: formBody
		}
	)
    return await response
}
export const add_driver = async (bus, first_name, last_name) => {
    let data = {
        bus, first_name, last_name
    }

    const formBody = JSON.stringify(data)

    let response = await fetch(
		baseurl + 'drivers/',
		{
		    method: 'POST',
		    headers: {
		        'Content-Type': 'application/json',
		    },
		    body: formBody
		}
	)
    return await response
}
export const add_school = async (name, address, city, state, zipcode) => {
    let data = {
        name, address, city, state, zipcode
    }

    const formBody = JSON.stringify(data)

    let response = await fetch(
		baseurl + 'schools/',
		{
		    method: 'POST',
		    headers: {
		        'Content-Type': 'application/json',
		    },
		    body: formBody
		}
	)
    return await response
}

// EDIT REQUESTS
export const edit_parent = async (id, username, password, first_name, last_name, email, parent) => {
    // note: parent: { phone_number, address, city, state, zipcode}
    let data = {
        username, 
        password,
        first_name, 
        last_name, 
        email, 
        parent,
    }
    const formBody = JSON.stringify(data);

    let response = await fetch(
		baseurl + 'parents/'+id+"/",
		{
		    method: 'PUT',
		    headers: {
                'Content-Type': 'application/json',
		    },
            body: formBody,
		}
    )
    return await response
}
export const edit_admin = async (id, username, first_name, last_name, email, password) => {
    let data = {
        username,
        password,
        first_name,
        last_name,
        email,
    }

    const formBody = JSON.stringify(data);

    let response = await fetch(
		baseurl + 'admins/' + id + "/",
		{
		    method: 'PUT',
		    headers: {
                //'Accept': 'application/json',
                'Content-Type': 'application/json',
                //'Authorization': 'JWT ' + localStorage.getItem('access'),
		    },
            body: formBody,
		}
    )
    return await response
}
export const edit_student = async (id, first_name, last_name, age, grade, school, bus, picture, parent_one, parent_two, track) => {
    const data = new FormData();
    data.append('first_name',first_name);
    data.append('last_name',last_name);
    data.append('age',age);
    data.append('grade',grade);
    data.append('school_id',school);
    data.append('bus_id',bus);
    data.append('picture',picture);
    data.append('parent_one_id',parent_one);
    data.append('parent_two_id',parent_two);
    data.append('track',track);

    let response = await fetch(
		baseurl + 'students/' + id + "/",
		{
		    method: 'PUT',
		    headers: {
                //'Accept': 'application/json',
                //'Content-Type': 'application/json',
                //'Authorization': 'JWT ' + localStorage.getItem('access'),
		    },
            body: data,
		}
    )
    return await response
}

export const edit_event = async (id,enter, picture, is_active, student) => {
    const data = new FormData();
    data.append('enter',enter);
    data.append('picture',picture);
    data.append('is_active',is_active);
    data.append('student_id',student);
    
    let response = await fetch(
		baseurl + 'events/'+id+"/",
		{
		    method: 'PUT',
		    headers: {
                //'Accept': 'application/json',
                //'Content-Type': 'application/json',
                //'Authorization': 'JWT ' + localStorage.getItem('access'),
		    },
            body: data,
		}
    )
    return await response
}

export const edit_device = async (id,username, password, is_device, device) => {
    const data = {
        username,
        password,
        is_device,
        device,
    }

    const formBody = JSON.stringify(data);

    let response = await fetch(
		baseurl + 'devices/'+id+"/",
		{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',
            },
		    body: formBody
		}
	)
    return await response
}

export const edit_bus = async (id, name) => {
    let data = {
        name
    }

    const formBody = JSON.stringify(data)

    let response = await fetch(
		baseurl + 'buses/'+ id + "/",
		{
		    method: 'PUT',
		    headers: {
		        'Content-Type': 'application/json',
		    },
		    body: formBody
		}
	)
    return await response
}

export const edit_driver = async (id, bus, first_name, last_name) => {
    let data = {
        bus, first_name, last_name
    }

    const formBody = JSON.stringify(data)

    let response = await fetch(
		baseurl + 'drivers/'+id+"/",
		{
		    method: 'PUT',
		    headers: {
		        'Content-Type': 'application/json',
		    },
		    body: formBody
		}
	)
    return await response
}
export const edit_school = async (id, name, address, city, state, zipcode) => {
    let data = {
        name, address, city, state, zipcode
    }

    const formBody = JSON.stringify(data)

    let response = await fetch(
		baseurl + 'schools/'+id+"/",
		{
		    method: 'PUT',
		    headers: {
		        'Content-Type': 'application/json',
		    },
		    body: formBody
		}
	)
    return await response
}

// DELETE REQUESTS
export const delete_parent = async (id) => {

    let response = await fetch(
		baseurl + 'parents/'+id+"/",
		{
		    method: 'DELETE',
		}
    )
    return await response
}
export const delete_admin = async (id) => {

    let response = await fetch(
		baseurl + 'admins/' + id + "/",
		{
		    method: 'DELETE',
		}
    )
    return await response
}
export const delete_student = async (id) => {

    let response = await fetch(
		baseurl + 'students/' + id + "/",
		{
		    method: 'DELETE',
		}
    )
    return await response
}

export const delete_event = async (id) => {

    let response = await fetch(
		baseurl + 'events/'+id+"/",
		{
		    method: 'DELETE',
		}
    )
    return await response
}

export const delete_device = async (id) => {
    let response = await fetch(
		baseurl + 'devices/'+id+"/",
		{
            method: 'DELETE',
		}
	)
    return await response
}

export const delete_bus = async (id) => {
    let response = await fetch(
		baseurl + 'buses/'+ id + "/",
		{
		    method: 'DELETE',
		}
	)
    return await response
}

export const delete_driver = async (id) => {
    let response = await fetch(
		baseurl + 'drivers/'+id+"/",
		{
		    method: 'DELETE',
		}
	)
    return await response
}
export const delete_school = async (id) => {
    let response = await fetch(
		baseurl + 'schools/'+id+"/",
		{
		    method: 'DELETE',
		}
	)
    return await response
}


