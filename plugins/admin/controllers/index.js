/*
  Copyright (C) 2016  PencilBlue, LLC

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
'use strict';

module.exports = function(pb) {
  class IndexController extends pb.BaseAdminController {
    render(cb) {
      this.setPageName(this.localizationService.get('DASHBOARD'));
      this.ts.load('admin2/index', function(error, result) {
        cb({content: result});
      });
    }
  }

  IndexController.getRoutes = function(cb) {
    let routes = [{
      method: 'get',
      path: '/admin2',
      access_level: pb.SecurityService.ACCESS_WRITER,
      auth_required: true,
      content_type: 'text/html'
    }];
    cb(null, routes);
  };

  return IndexController;
};
