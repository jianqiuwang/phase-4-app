class SessionsController < ApplicationController
    # This action is used to create a new session, often during the login process. It verifies the user's credentials (e.g., username and password), creates a new session, and stores the user's ID in the session data.
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: ["Invalid username or password"]  }, status: :unauthorized
        end
    end

    # This action is used to end a session, often during the logout process. It deletes the session data and removes the user's ID from the session.
    def destroy
        if session[:user_id]
            session.delete :user_id
            head :no_content
        else
            return render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end
end
