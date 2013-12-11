/*
 * mapshup - Webmapping made easy
 * http://mapshup.info
 *
 * Copyright 2011, Jérôme Gasperi
 *
 * jerome[dot]gasperi[at]gmail[dot]com
 *
 * This software is a computer program whose purpose is a webmapping application
 * to display and manipulate geographical data.
 *
 * This software is released under a dual licensing.
 *
 * Open Source License
 * --------------------------------------------------------------------
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 *
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 *
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 *
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 *
 * Commercial License
 * -----------------------------------------------------------------------
 * This is the appropriate option if you are creating proprietary applications
 * and you are not prepared to distribute and share the source code of your
 * application under the CeCILL license.
 * Please visit http://mapshup.info/license for more details.
 *
 */
(function (c){

    /*
     * Update configuration options
     */
    c["general"].rootUrl = "http://localhost/mapshup/client";
    c["general"].serverRootUrl = "http://localhost/mapshup/server";
    c["general"].themePath = "/js/mapshup/theme/default";
    c["general"].indexPath = "/index.html";
    c["general"].mapserverUrl = "http://localhost/cgi-bin/mapserv?";
    c['upload'].allowedMaxSize = 5000000;
    c['upload'].allowedMaxNumber = 5;
    
    /*
     * Remove plugins
     */
    c.remove("plugins", "Routing");
    c.remove("plugins", "Logger");
    c.remove("plugins", "WorldGrid");
    c.remove("plugins", "Welcome");
    
})(window.M.Config);
