<template>
    <div class="about"></div>
    <h1>This is an sign up page</h1>
    <div class="container">
        <div class="row">
            <div class="col-sm"></div>
                <div class="col-sm">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share you email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputusername">Username</label>
                            <input type="username" required class="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" placeholder="Username" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" required class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword2">Re-type Password</label>
                            <input type="password" required class="form-control" id="exampleInputPassword2" placeholder="Password" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div class="col-sm"></div>   
        </div>
    </div>
</template>
