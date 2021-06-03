class Api::LogsController < ApplicationController

    before_action :get_log, only: [:show, :destory, :update]

    def index
        logs = Log.all
        render json: logs
    end

    def show
        render json: @log
    end

    def create
        logs = Log.new(log_params)
        if log.save
            render json: log
        else
            render json: {errors: log.errors }, message: 'you did something wrong', status: :unprocessable_entity
        end
    end

    def update
        if @log.update(log_params)
            render json: @log
        else
            render json: {errors: log.errors }, message: 'you did something wrong, you IDIOT', status: :unprocessable_entity
        end
    end

    def destroy
       render json: @log.destroy
    end


    private

    def get_log
        @log = Log.find(params[:id])
    end

    def log_params
        params.require(:log).premit(:title, :description)
    end
end
